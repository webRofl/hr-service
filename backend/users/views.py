from rest_framework import viewsets, permissions, status, mixins
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from authentication.models import User

from .serializers import SkillSerializer, ProfileSerializer, ProfileListSerializer, ProfilePostSerializer, ProfileUpdateSerializer
from .models import Profile, Skill
from .permissions import IsGetMethodOrAuthOnly
from helpers.get_data_with_user import get_data_with_user
from users.models import User

class ProfileCRUDViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)
    http_method_names = ['get', 'post', 'put', 'delete']

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.queryset.filter(user_id=pk))
        serializer = self.serializer_class(user, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request):
        serializer = ProfileListSerializer(self.get_queryset(), many=True, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        data = get_data_with_user(request)

        serializer = ProfileUpdateSerializer(data=data, instance=self.queryset.get(user=pk))
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        data = get_data_with_user(request)
        user_instance = User.objects.get(id=data['user'])

        user_data = {
                'email': user_instance.email,
                'username': user_instance.username,
                }

        data.update(user_data)

        serializer = ProfilePostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SkillsCRUDViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

