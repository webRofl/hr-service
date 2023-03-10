from rest_framework import viewsets, permissions, status, mixins
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from authentication.models import User

from .serializers import ProfileSerializer, ProfileUpdateSerializer, SkillSerializer
from .models import Profile, Skill
from .permissions import IsGetMethodOrAuthOnly

class ProfileCRUDViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)
    http_method_names = ['get', 'post', 'put', 'delete']

    def __get_data_with_user(self, request):
        return {**request.data, 'user': request.user.id}

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.queryset.filter(user_id=pk))
        serializer = self.serializer_class(user)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        data = self.__get_data_with_user(request)

        serializer = ProfileUpdateSerializer(data=data, instance=self.queryset.get(user=pk))
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        data = self.__get_data_with_user(request)

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SkillsCRUDViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

