from rest_framework import serializers

from .models import Response
from authentication.models import User
from users.serializers import EmployerProfileRetrieveSerializer
from projects.serializers import AuthorReviewSerializer

class ResponseGetSerializer(serializers.ModelSerializer):
    author = AuthorReviewSerializer()
    target = EmployerProfileRetrieveSerializer()
    text = serializers.CharField()

    class Meta:
        model = Response
        fields='__all__'


class ResponsePostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    target = serializers.PrimaryKeyRelatedField(queryset=User.objects)
    text = serializers.CharField()

    class Meta:
        model = Response
        exclude = ['created', 'id']
