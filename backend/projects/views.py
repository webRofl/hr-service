from rest_framework import viewsets, mixins, status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ProjectSerializer, TagSerializer, ProjectListSerializer, ProjectPostSerializer, ProjectRetrieveSerializer
from .models import Project, Tag
from helpers.get_data_with_user import get_data_with_user

class ProjectList(generics.ListAPIView):
   queryset = Project.objects.all()
   serializer_class = ProjectListSerializer
   filter_backends = [DjangoFilterBackend]
   filterset_fields = ['author']


class ProjectCRUViewSet(viewsets.GenericViewSet,
                 mixins.CreateModelMixin,
                 mixins.RetrieveModelMixin,
                 mixins.UpdateModelMixin):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

  def retrieve(self, request, pk=None):
      serializer = ProjectRetrieveSerializer(Project.objects.get(pk=pk), context={'request': request})

      return Response(serializer.data, status=status.HTTP_200_OK)

  def create(self, request):
      data = get_data_with_user(request, 'author')

      serializer = ProjectPostSerializer(data=data)
      serializer.is_valid(raise_exception=True)
      serializer.save()

      return Response(serializer.data, status=status.HTTP_201_CREATED)

  def update(self, request, pk=None):
    serializer = self.serializer_class(data=request.data, instance=self.queryset.get(id=pk))
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response(serializer.data, status=status.HTTP_200_OK)


class TagCRUDViewSet(viewsets.ModelViewSet):
  queryset = Tag.objects.all()
  serializer_class = TagSerializer
