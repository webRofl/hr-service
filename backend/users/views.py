from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .serializers import SkillSerializer, EmployeeProfileSerializer, EmployeeProfileListSerializer, EmployeeProfilePostSerializer, EmployeeProfileUpdateSerializer, EmployerProfileRetrieveSerializer, EmployerProfileListSerializer, EmployerProfilePostSerializer, EmployerProfileUpdateSerializer
from .models import Skill, EmployeeProfile, EmployerProfile
from .permissions import IsGetMethodOrAuthOnly
from users.models import User
from authentication.models import User
from helpers.get_data_with_user import get_data_with_user
from helpers.permissions import is_owner
from rest_framework.exceptions import PermissionDenied

class EmployeeProfileCRUDViewSet(viewsets.ModelViewSet):
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeeProfileSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)
    http_method_names = ['get', 'post', 'put', 'delete']

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.queryset.filter(user_id=pk))
        serializer = self.serializer_class(user, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request):
        serializer = EmployeeProfileListSerializer(self.get_queryset(), many=True, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        data = get_data_with_user(request)

        serializer = EmployeeProfileUpdateSerializer(data=data, instance=self.queryset.get(user=pk))
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

        serializer = EmployeeProfilePostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class EmployerProfileCRUDViewSet(viewsets.ModelViewSet):
    queryset = EmployerProfile.objects.all()
    serializer_class = EmployerProfileRetrieveSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)
    http_method_names = ['get', 'post', 'put', 'delete']

    def retrieve(self, request, pk=None):
        if not is_owner(request):
            return Response({}, status=status.HTTP_403_FORBIDDEN)

        user = get_object_or_404(self.queryset.filter(user_id=pk))
        serializer = self.serializer_class(user, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request):
        serializer = EmployerProfileListSerializer(self.get_queryset(), many=True, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        data = get_data_with_user(request)

        serializer = EmployerProfileUpdateSerializer(data=data, instance=self.queryset.get(user=pk))
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

        serializer = EmployerProfilePostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SkillsCRUDViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
