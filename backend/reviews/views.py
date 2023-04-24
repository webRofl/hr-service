from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import ProjectReview, ProfileReview
from .serializers import ProjectReviewPostSerializer, ProfileReviewPostSerializer
from helpers.get_data_with_user import get_data_with_user
from helpers.serializer_lifecycle import serializer_lifecycle

class ProjectReviewCRUDViewSet(viewsets.ModelViewSet):
    queryset = ProjectReview.objects.all()
    serializer_class = ProjectReviewPostSerializer
    http_method_names = ['post']
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request):
        data = get_data_with_user(request, 'author')

        serializer = serializer_lifecycle(data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ProfileReviewCRUDViewSet(viewsets.ModelViewSet):
    queryset = ProfileReview.objects.all()
    serializer_class = ProfileReviewPostSerializer
    http_method_names = ['post']
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request):
        data = get_data_with_user(request, 'author')

        serializer = serializer_lifecycle(data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


