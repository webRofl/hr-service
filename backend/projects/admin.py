from django.contrib import admin

from helpers.auto_slug_admin import AutoSlug
from .models import Project, Review, Tag

admin.site.register(Project, AutoSlug.get('title'))
admin.site.register(Tag, AutoSlug.get('name'))
admin.site.register(Review)
