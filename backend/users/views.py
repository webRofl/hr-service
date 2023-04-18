from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import SkillSerializer, EmployeeProfileSerializer, EmployeeProfileListSerializer, EmployeeProfilePostSerializer, EmployeeProfileUpdateSerializer, EmployerProfileRetrieveSerializer, EmployerProfilePostSerializer, EmployerProfileUpdateSerializer
from .models import Skill, EmployeeProfile, EmployerProfile
from .permissions import IsGetMethodOrAuthOnly
from users.models import User
from authentication.models import User
from helpers.get_data_with_user import get_data_with_user
from helpers.permissions import is_owner
from helpers.unwrap_formdata_string import unwrap_formdata_string
from helpers.serializer_lifecycle import serializer_lifecycle

class EmployeeProfilePostView(mixins.CreateModelMixin,
                              mixins.UpdateModelMixin,
                              viewsets.GenericViewSet):
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeeProfilePostSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request):
        if not is_owner(request):
            return Response({}, status=status.HTTP_403_FORBIDDEN)

        data = get_data_with_user(request)
        data = unwrap_formdata_string(data)
        user_instance = User.objects.get(id=data['user'])

        user_data = {
                'email': user_instance.email,
                'username': user_instance.username,
                }

        data.update(user_data)

        serializer = serializer_lifecycle(EmployeeProfilePostSerializer, data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def update(self, request, pk=None):
        if not is_owner(request):
            return Response({}, status=status.HTTP_403_FORBIDDEN)

        data = get_data_with_user(request)
        data = unwrap_formdata_string(data)

        serializer = serializer_lifecycle(EmployeeProfileUpdateSerializer, data, instance=self.queryset.get(user=pk))

        return Response(serializer.data, status=status.HTTP_200_OK)


class EmployeeProfileReceiveView(mixins.RetrieveModelMixin,
                                 viewsets.GenericViewSet):
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeeProfileSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.queryset.filter(user_id=pk))
        serializer = self.serializer_class(user, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)
    

class EmployeeProfileListView(mixins.ListModelMixin,
                              viewsets.GenericViewSet):
    queryset = EmployeeProfile.objects.all()
    serializer_class = EmployeeProfileListSerializer

    def list(self, request):
        serializer = self.serializer_class(self.get_queryset(), many=True, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)


class EmployerProfilePostView(mixins.CreateModelMixin,
                              mixins.UpdateModelMixin,
                              viewsets.GenericViewSet):
    queryset = EmployerProfile.objects.all()
    serializer_class = EmployerProfilePostSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request):
        if not is_owner(request):
            return Response({}, status=status.HTTP_403_FORBIDDEN)

        data = get_data_with_user(request)
        data = unwrap_formdata_string(data)
        user_instance = User.objects.get(id=data['user'])

        user_data = {
                'email': user_instance.email,
                'username': user_instance.username,
                }

        data.update(user_data)
        serializer = serializer_lifecycle(EmployerProfilePostSerializer, data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, pk=None):
        if not is_owner(request):
            return Response({}, status=status.HTTP_403_FORBIDDEN)

        data = get_data_with_user(request)
        data = unwrap_formdata_string(data)

        serializer = serializer_lifecycle(EmployerProfileUpdateSerializer, data, instance=self.queryset.get(user=pk))

        return Response(serializer.data, status=status.HTTP_200_OK)


class EmployerProfileReceiveView(mixins.RetrieveModelMixin,
                                 viewsets.GenericViewSet):
    queryset = EmployerProfile.objects.all()
    serializer_class = EmployerProfileRetrieveSerializer
    permission_classes = (IsGetMethodOrAuthOnly,)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.queryset.filter(user_id=pk))
        serializer = self.serializer_class(user, context={'request': request})

        return Response(serializer.data, status=status.HTTP_200_OK)


class SkillsCRUDViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
