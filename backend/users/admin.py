from django.contrib import admin

from helpers.auto_slug_admin import AutoSlug
from .models import Profile, Skill

admin.site.register(Profile, AutoSlug.get('username'))
admin.site.register(Skill, AutoSlug.get('name'))
