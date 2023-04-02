from rest_framework import serializers

from .models import ProjectReview, ProfileReview
from authentication.models import User
from projects.models import Project
from users.models import Profile

class ProjectReviewPostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects)
    text = serializers.CharField(max_length=512)

    class Meta:
        model = ProjectReview
        fields = '__all__'


class ProfileReviewPostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    profile = serializers.PrimaryKeyRelatedField(queryset=Profile.objects)
    text = serializers.CharField(max_length=512)

    class Meta:
        model = ProfileReview
        fields = '__all__'


