from rest_framework import viewsets

from .serializers import ProjectSerializer, TagSerializer
from .models import Project, Tag

class ProjectCRUDViewSet(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  lookup_field = 'slug'


class TagCRUDViewSet(viewsets.ModelViewSet):
  queryset = Tag.objects.all()
  serializer_class = TagSerializer
