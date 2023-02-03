from rest_framework import viewsets

from .serializers import ProjectSerializer
from .models import Project

class ProjectCRUDViewSet(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
