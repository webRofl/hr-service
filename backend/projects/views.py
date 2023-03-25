from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ProjectSerializer, TagSerializer
from .models import Project, Tag

class ProjectCRUDViewSet(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  http_method_names = ['get', 'post', 'put', 'delete']
  filter_backends = [DjangoFilterBackend]
  filterset_fields = ['author']

  def update(self, request, pk=None):
    serializer = self.serializer_class(data=request.data, instance=self.queryset.get(id=pk))
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response(serializer.data, status=status.HTTP_200_OK)


class TagCRUDViewSet(viewsets.ModelViewSet):
  queryset = Tag.objects.all()
  serializer_class = TagSerializer
