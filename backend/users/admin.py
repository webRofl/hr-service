from django.contrib import admin

from .models import Profile, Skill

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('slug', 'id', 'projects_count',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
