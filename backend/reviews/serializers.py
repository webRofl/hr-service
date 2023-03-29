from rest_framework import serializers

from .models import ProjectReview
from authentication.models import User
from projects.models import Project

class ProjectReviewPostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects)
    text = serializers.CharField(max_length=512)

    class Meta:
        model = ProjectReview
        fields = '__all__'

