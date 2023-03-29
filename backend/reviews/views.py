from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import ProjectReview
from .serializers import ProjectReviewPostSerializer
from helpers.get_data_with_user import get_data_with_user
from users.models import Profile

class ReviewCRUDViewSet(viewsets.ModelViewSet):
    queryset = ProjectReview.objects.all()
    serializer_class = ProjectReviewPostSerializer
    http_method_names = ['get', 'post', 'put', 'delete']
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request):
        data = get_data_with_user(request, 'author')

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

