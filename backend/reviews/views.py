from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Review
from .serializers import ReviewSerializer

class ReviewCRUDViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    http_method_names = ['get', 'post', 'put', 'delete']

