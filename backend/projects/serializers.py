from rest_framework import serializers

from .models import Project, Tag
from reviews.serializers import ReviewSerializer

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ('name',)


class ProjectSerializer(serializers.ModelSerializer):
  tags = serializers.StringRelatedField(many=True)
  reviews = ReviewSerializer(many=True)

  class Meta:
    model = Project
    fields = '__all__'

