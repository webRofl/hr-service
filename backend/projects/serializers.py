from rest_framework import serializers

from .models import Project, Tag

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ('name',)

class ProjectSerializer(serializers.ModelSerializer):
  tags = serializers.StringRelatedField(many=True)

  class Meta:
    model = Project
    fields = '__all__'
    lookup_field = 'slug'
