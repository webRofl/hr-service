from rest_framework import serializers

from .models import Review
from users.models import Profile

class ReviewAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        # model = User - current statement
        model = Profile
        fields = ('username',)


class ReviewSerializer(serializers.ModelSerializer):
    author = ReviewAuthorSerializer(read_only=True)

    class Meta:
        model = Review
        exclude = ['id']

