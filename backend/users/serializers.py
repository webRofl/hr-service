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
    image = serializers.ImageField(required=False)
    reviews = ProfileReviewSerializer(many=True, read_only=True)
    work_places = ProfileWorkPlaceSerializer(many=True, read_only=True)

    class Meta:
        model = EmployeeProfile
        read_only_fields = ('is_active', 'id', 'skills', 'created', 'email', 'username', 'work_places', 'reviews',)
        fields = '__all__'


class EmployeeProfilePostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()

    class Meta:
        model = EmployeeProfile
        exclude = ('created', 'skills', 'work_places', 'experience',)


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


class EmployerProfilePostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()

    class Meta:
        model = EmployerProfile
        exclude = ('created', 'projects_count', 'total_votes', 'votes_average', 'reviews',)


class EmployerProfileUpdateSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    image = serializers.ImageField(required=False)
    reviews = ProfileReviewSerializer(many=True, read_only=True)

    class Meta:
        model = EmployerProfile
        exclude = ['responses']
        read_only_fields = ('is_active', 'id', 'created', 'email', 'username', 'reviews',)
