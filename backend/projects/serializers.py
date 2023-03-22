from rest_framework import serializers

from .models import Project, Tag
from reviews.serializers import ReviewSerializer

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ('name',)


class ProjectSerializer(serializers.ModelSerializer):
  tags = serializers.StringRelatedField(many=True, read_only=True)
  reviews = ReviewSerializer(many=True, read_only=True)


  class Meta:
    model = Project
    fields = '__all__'


  def update(self, instance, validated_data):
    total_votes = instance.get_total_votes()
    votes_average = instance.get_votes_average()

    validated_data['total_votes'] = total_votes
    validated_data['votes_average'] = votes_average

    super(ProjectSerializer, self).update(instance, validated_data)

    return instance

