from django.contrib import admin
from .models import Project, Review, Tag

class AutoSlug:
  def get(field):
    class ReturnClass(admin.ModelAdmin):
      prepopulated_fields = {'slug': (field,)}
    
    return ReturnClass

admin.site.register(Project, AutoSlug.get('title'))
admin.site.register(Tag, AutoSlug.get('name'))
admin.site.register(Review)
