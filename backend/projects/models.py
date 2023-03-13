from django.db import models
import uuid
from django.utils.text import slugify
from django.core.validators import MinValueValidator, MaxValueValidator

from authentication.models import User

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
          ('FT', 'Full-Time'),
          ('PT', 'Part-Time'),
          ('PR', 'Project'),
          ]

  title = models.CharField(max_length=100, unique=True, default='')
  slug = models.SlugField(unique=True, default='')
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  description = models.TextField(default='')
  fully_description = models.TextField(default='')
  salary = models.IntegerField(null=True, blank=True)
  experience = models.IntegerField(null=False, blank=False)
  employment = models.CharField(max_length=2, choices=EMPLOYMENT_CHOICES, default=EMPLOYMENT_CHOICES[0][0])
  tags = models.ManyToManyField(Tag, blank=True)
  image = models.ImageField(null=True, blank=True, default='projects/images/default.png', upload_to='projects/images')
  total_votes = models.IntegerField(default=0)
  votes_average = models.PositiveSmallIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
  demo_link = models.CharField(max_length=500, null=True, blank=True)
  source_link = models.CharField(max_length=500, null=True, blank=True)
  created = models.DateTimeField(auto_now_add=True)
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

  def save(self, *args, **kwargs):
    self.slug = slugify(self.title)
    super(Project, self).save(*args, **kwargs)

  def __str__(self):
    return self.title

class Review(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  VOTE_TYPE = (
    ('up', 'Up Vote'),
    ('down', 'Down Vote'),
  )
  review_text = models.TextField(default='')
  value = models.CharField(max_length=200, choices=VOTE_TYPE)
  created = models.DateTimeField(auto_now_add=True)
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

  def __str__(self):
    return self.value
