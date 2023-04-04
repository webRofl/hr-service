from django.contrib import admin

from .models import EmployeeProfile, EmployerProfile, Skill, WorkPlace

@admin.register(EmployeeProfile)
class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'email', 'username', 'total_votes', 'votes_average', 'created')


@admin.register(EmployerProfile)
class ProfileAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'projects_count', 'email', 'name', 'second_name', 'username', 'total_votes', 'votes_average', 'created')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

@admin.register(WorkPlace)
class WorkPlaceAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
