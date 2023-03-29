from django.contrib import admin

from .models import Project, Tag

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'total_votes', 'votes_average',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'slug',)

