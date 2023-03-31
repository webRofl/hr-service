from rest_framework import serializers

from .models import Project, Tag
from reviews.models import ProjectReview
from users.models import User


class AuthorReviewSerializer(serializers.Serializer):
    username = serializers.CharField()
    id = serializers.CharField()


class ProjectReviewSerializer(serializers.ModelSerializer):
    author = AuthorReviewSerializer()

    class Meta:
        model = ProjectReview
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ('name',)


class ProjectSerializer(serializers.ModelSerializer):
  id = serializers.CharField(read_only=True)
  total_votes = serializers.IntegerField(read_only=True)
  votes_average = serializers.FloatField(read_only=True)
  author = serializers.PrimaryKeyRelatedField(read_only=True)
  tags = serializers.StringRelatedField(many=True, read_only=True)
  reviews = ProjectReviewSerializer(many=True, read_only=True)
  image = serializers.CharField(read_only=True)


  class Meta:
    model = Project
    fields = '__all__'


class ProjectPostSerializer(serializers.ModelSerializer):
  author = serializers.PrimaryKeyRelatedField(queryset=User.objects)


  class Meta:
      model = Project
      exclude = ['id', 'total_votes', 'votes_average', 'created', 'tags', 'image']


class ProjectListSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    total_votes = serializers.IntegerField(read_only=True)
    votes_average = serializers.FloatField(read_only=True)
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    tags = serializers.StringRelatedField(many=True, read_only=True)
    image = serializers.CharField(read_only=True)

    class Meta:
        model = Project
        exclude = ['reviews']

