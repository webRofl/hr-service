from rest_framework import serializers

from .models import Project, Tag
from reviews.models import ProjectReview
from users.models import User
from reviews.serializers import AuthorReviewSerializer


class ProjectReviewSerializer(serializers.ModelSerializer):
    author = AuthorReviewSerializer()

    class Meta:
        model = ProjectReview
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("name",)


class ProjectUpdateSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True, required=False)
    reviews = ProjectReviewSerializer(many=True, required=False)
    image = serializers.ImageField()

    def update(self, instance, validated_data):
        super(ProjectUpdateSerializer, self).update(instance, validated_data)

        if hasattr(validated_data, "reviews") and len(validated_data["reviews"]) > 0:
            reviews = instance.reviews.all()
            reviews.append(validated_data["reviews"])
            instance.reviews.set(reviews)

        return instance

    class Meta:
        model = Project
        exclude = [
            "author",
            "experience",
            "total_votes",
            "votes_average",
            "created",
            "id",
        ]


class ProjectPostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    title = serializers.CharField(max_length=100)
    image = serializers.ImageField()

    class Meta:
        model = Project
        exclude = ["total_votes", "votes_average", "tags", "experience"]
        read_only_fields = ["id", "created"]


class ProjectRetrieveSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    tags = serializers.StringRelatedField(many=True, read_only=True)
    image = serializers.SerializerMethodField("get_image_link")
    reviews = ProjectReviewSerializer(many=True, read_only=True)

    def get_image_link(self, instance):
        return self.context["request"].build_absolute_uri(instance.image.url)

    class Meta:
        model = Project
        fields = "__all__"


class ProjectListSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    total_votes = serializers.IntegerField(read_only=True)
    votes_average = serializers.FloatField(read_only=True)
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    tags = serializers.StringRelatedField(many=True, read_only=True)
    image = serializers.SerializerMethodField("get_image_link")

    def get_image_link(self, instance):
        return self.context["request"].build_absolute_uri(instance.image.url)

    class Meta:
        model = Project
        exclude = ["reviews"]
