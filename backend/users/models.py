from django.db import models
from authentication.models import User
import uuid
from django.utils.text import slugify

from projects.models import Project

class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True, default='')
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.name
    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    projects = models.ManyToManyField(Project, blank=True)
    name = models.CharField(max_length=50, default='')
    second_name = models.CharField(max_length=50, default='')
    email = models.EmailField(max_length=50, default='', blank=True)
    username = models.CharField(max_length=50, unique=True, default='', blank=True)
    slug = models.SlugField(unique=True, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    image = models.ImageField(
        null=True, blank=True, upload_to='users/images',
        default="users/images/default.png")
    skills = models.ManyToManyField(Skill, blank=True)
    github = models.CharField(max_length=100, blank=True, null=True)
    linkedin = models.CharField(max_length=100, blank=True, null=True)
    youtube = models.CharField(max_length=100, blank=True, null=True)
    website = models.CharField(max_length=100, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    
    def save(self, *args, **kwargs):
        self.username = self.user.username
        self.email = self.user.email
        self.slug = slugify(self.username)
        self.is_active = self.user.is_active
        super(Profile, self).save(*args, **kwargs)

    def __str__(self):
        return self.username
    
    class Meta:
        ordering = ['created']

