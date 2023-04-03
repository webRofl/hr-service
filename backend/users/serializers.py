from rest_framework import serializers

from .models import Profile, Skill
from reviews.models import ProfileReview
from reviews.serializers import AuthorReviewSerializer

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name',)


class ProfileReviewSerializer(serializers.ModelSerializer):
    author = AuthorReviewSerializer()


    class Meta:
        model = ProfileReview
        fields = '__all__'



class ProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    projects_count = serializers.IntegerField(read_only=True)
    reviews = ProfileReviewSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField('get_image_link')

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)

    class Meta:
        model = Profile
        exclude = ('is_active', 'slug',)


class ProfileListSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    projects_count = serializers.IntegerField(read_only=True)
    image = serializers.SerializerMethodField('get_image_link')

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)


    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'reviews',)



class ProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ('created', 'image', 'skills', 'projects_count',)


class ProfileUpdateSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id', 'image', 'skills', 'created', 'email', 'username',)

