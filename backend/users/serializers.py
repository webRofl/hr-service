from rest_framework import serializers

from .models import Skill, EmployeeProfile, WorkPlace, EmployerProfile, Response
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


class ProfileWorkPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkPlace
        fields = '__all__'


class EmployeeProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    reviews = ProfileReviewSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField('get_image_link')
    work_places = ProfileWorkPlaceSerializer(many=True, read_only=True)

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)

    class Meta:
        model = EmployeeProfile
        exclude = ('is_active',)


class EmployeeProfileListSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField('get_image_link')

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)


    class Meta:
        model = EmployeeProfile
        exclude = ('is_active', 'reviews', 'work_places')


class EmployeeProfileUpdateSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = EmployeeProfile
        exclude = ('is_active', 'id', 'image', 'skills', 'created', 'email', 'username', 'work_places', 'reviews',)


class EmployeeProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeProfile
        exclude = ('created', 'image', 'skills', 'work_places', 'experience',)


class ProfileResponseSerializer(serializers.ModelSerializer):
    author = AuthorReviewSerializer()

    class Meta:
        model = Response
        fields = '__all__'


class EmployerProfileRetrieveSerializer(serializers.ModelSerializer):
    reviews = ProfileReviewSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField('get_image_link')
    projects_count = serializers.IntegerField(read_only=True)
    responses = ProfileResponseSerializer(many=True, read_only=True)

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)

    class Meta:
        model = EmployerProfile
        exclude = ('is_active',)


class EmployerProfileListSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField('get_image_link')

    def get_image_link(self, instance):
        return self.context['request'].build_absolute_uri(instance.image.url)


    class Meta:
        model = EmployerProfile
        exclude = ('is_active', 'reviews', 'responses',)


class EmployerProfilePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployerProfile
        exclude = ('created', 'image', 'projects_count', 'total_votes', 'votes_average', 'reviews',)


class EmployerProfileUpdateSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = EmployerProfile
        exclude = ('is_active', 'id', 'image', 'created', 'email', 'username', 'reviews',)


