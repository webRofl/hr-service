from rest_framework import serializers

from .models import Profile, Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name',)


class ProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id',)

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id', 'image', 'skills', 'created', 'email', 'username',)

