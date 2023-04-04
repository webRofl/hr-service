from rest_framework import serializers

from .models import Project, Tag
from reviews.models import ProjectReview
from users.models import User
from reviews.serializers import AuthorReviewSerializer


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


class ProjectRetrieveSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    tags = serializers.StringRelatedField(many=True, read_only=True)
    image = serializers.SerializerMethodField('get_image_link')
    reviews = ProjectReviewSerializer(many=True, read_only=True)

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)

    class Meta:
        model = Project
        fields = '__all__'


class ProjectListSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    total_votes = serializers.IntegerField(read_only=True)
    votes_average = serializers.FloatField(read_only=True)
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    tags = serializers.StringRelatedField(many=True, read_only=True)
    image = serializers.SerializerMethodField('get_image_link')

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)

    class Meta:
        model = Project
        exclude = ['reviews']

