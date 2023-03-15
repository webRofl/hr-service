from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ProjectSerializer, TagSerializer
from .models import Project, Tag

class ProjectCRUDViewSet(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  filter_backends = [DjangoFilterBackend]
  filterset_fields = ['title']

  def update(self, request, pk=None):
    serializer = self.serializer_class(data=request.data, instance=self.queryset.filter(id=pk))
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response(serializer.data, status=status.HTTP_201_CREATED)


class TagCRUDViewSet(viewsets.ModelViewSet):
  queryset = Tag.objects.all()
  serializer_class = TagSerializer
