from rest_framework import viewsets, mixins, status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import (
    ProjectUpdateSerializer,
    TagSerializer,
    ProjectListSerializer,
    ProjectPostSerializer,
    ProjectRetrieveSerializer,
)
from .models import Project, Tag
from helpers.get_data_with_user import get_data_with_user
from helpers.unwrap_formdata_string import unwrap_formdata_string
from helpers.serializer_lifecycle import serializer_lifecycle


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectListSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["author"]


class ProjectCreateAndUpdateView(mixins.CreateModelMixin,
                                 mixins.UpdateModelMixin,
                                 viewsets.GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectPostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request):
        data = get_data_with_user(request, "author")
        data = unwrap_formdata_string(data)

        serializer = serializer_lifecycle(self.serializer_class, data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def update(self, request, pk=None):
        data = unwrap_formdata_string(request.data)
        serializer = ProjectUpdateSerializer(
            data=data, instance=self.queryset.get(id=pk)
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


class ProjectRetrieveView(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectRetrieveSerializer

    def retrieve(self, request, pk=None):
        serializer = ProjectRetrieveSerializer(
            Project.objects.get(pk=pk), context={"request": request}
        )

        return Response(serializer.data, status=status.HTTP_200_OK)


class TagCRUDViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
