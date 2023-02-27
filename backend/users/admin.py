from django.contrib import admin

from .models import Profile, Skill

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('username',)}
    read_only_fields = ('slug', 'id',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    prepopulated_fields={'slug': ('name',)}

