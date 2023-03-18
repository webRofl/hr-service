from django.contrib import admin

from .models import Project, Review, Tag

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'slug',)

admin.site.register(Review)
