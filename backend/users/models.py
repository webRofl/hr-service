from django.db import models
import uuid
from django.utils.text import slugify
from django.core.validators import MinValueValidator, MaxValueValidator

from authentication.models import User
from projects.models import Project
from reviews.models import ProfileReview
from responses.models import Response

class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True, default='')
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.name


class BaseProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default='')
    second_name = models.CharField(max_length=50, default='')
    email = models.EmailField(max_length=50, default='', blank=True)
    username = models.CharField(max_length=50, unique=True, default='', blank=True)
    total_votes = models.IntegerField(default=0)
    votes_average = models.FloatField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    city = models.CharField(max_length=50, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    reviews = models.ManyToManyField(ProfileReview, blank=True, related_name='+')
    created = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.username

    class Meta:
        ordering = ['created']
        abstract = True


class WorkPlace(models.Model):
    city = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to='users/images')
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.title


class EmployeeProfile(BaseProfile):
    github = models.CharField(max_length=100, blank=True, null=True)
    linkedin = models.CharField(max_length=100, blank=True, null=True)
    youtube = models.CharField(max_length=100, blank=True, null=True)
    experience = models.SmallIntegerField(default=0)
    salary = models.IntegerField(null=True, blank=True)
    skills = models.ManyToManyField(Skill, blank=True)
    work_places = models.ManyToManyField(WorkPlace, blank=True)
    image = models.ImageField(upload_to='users/images', default="users/images/default.png")

    def save(self, *args, **kwargs):
        self.username = self.user.username
        self.email = self.user.email
        self.is_active = self.user.is_active
        super(EmployeeProfile, self).save(*args, **kwargs)


class EmployerProfile(BaseProfile):
    projects_count = models.PositiveSmallIntegerField(default=0)
    website = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='users/images', blank=True, null=True)

    def save(self, *args, **kwargs):
        self.username = self.user.username
        self.email = self.user.email
        self.is_active = self.user.is_active
        self.projects_count = Project.objects.filter(author=self.user).count()
        super(EmployerProfile, self).save(*args, **kwargs)

