from rest_framework import serializers

from .models import Profile, Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name',)


class ProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    projects_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id',)


class ProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ('created', 'image', 'skills', 'projects_count',)


class ProfileUpdateSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id', 'image', 'skills', 'created', 'email', 'username',)

