from rest_framework import serializers

from .models import Profile, Skill
from projects.models import Project

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name',)


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'image', 'description', 'total_votes', 'votes_average',)


class ProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    projects = ProjectsSerializer(many=True)

    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id',)

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id', 'image', 'skills', 'created', 'email', 'username',)

