from django.db import models
import uuid
from django.utils.text import slugify
from django.core.validators import MinValueValidator, MaxValueValidator
from django_resized import ResizedImageField

from authentication.models import User
from reviews.models import ProjectReview

class Tag(models.Model):
  name = models.CharField(max_length=100, unique=True, default='')
  slug = models.SlugField(unique=True, default='')
  created = models.DateTimeField(auto_now_add=True)
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

  def save(self, *args, **kwargs):
    self.slug = slugify(self.name)
    super(Tag, self).save(*args, **kwargs)

  def __str__(self):
    return self.name


class Project(models.Model):
  FULL_TIME = 'FT'
  PART_TIME = 'PT'
  PROJECT = 'PR'

  EMPLOYMENT_CHOICES = [
          (FULL_TIME, 'Full-Time'),
          (PART_TIME, 'Part-Time'),
          (PROJECT, 'Project'),
          ]

  title = models.CharField(max_length=100, default='')
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  description = models.TextField(default='')
  fully_description = models.TextField(default='')
  salary = models.IntegerField(null=True, blank=True)
  experience = models.IntegerField(default=0)
  employment = models.CharField(max_length=2, choices=EMPLOYMENT_CHOICES, default=EMPLOYMENT_CHOICES[0][0])
  tags = models.ManyToManyField(Tag, blank=True)
  reviews = models.ManyToManyField(ProjectReview, blank=True, related_name='+')
  image = ResizedImageField(null=True, blank=True, default='projects/images/default.png', upload_to='projects/images', force_format='WEBP', quality=75)
  total_votes = models.IntegerField(default=0)
  votes_average = models.FloatField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
  demo_link = models.CharField(max_length=500, null=True, blank=True)
  source_link = models.CharField(max_length=500, null=True, blank=True)
  created = models.DateTimeField(auto_now_add=True)
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

  def __str__(self):
    return self.title

  def __calculate_reviews(self, cb):
    instance_list = Project.objects.get(pk=self.id).reviews.all()
    for instance in instance_list:
      cb(instance)

  def get_total_votes(self):
    total = 0

    def cb(instance):
      nonlocal total
      total += 1

    self.__calculate_reviews(cb)

    return total

  def get_votes_average(self):
    reviews_rate_sum = 0

    def cb(instance):
      nonlocal reviews_rate_sum
      reviews_rate_sum += instance.rate

    self.__calculate_reviews(cb)

    return round(reviews_rate_sum / self.total_votes, 2) if self.total_votes > 0 else 0
