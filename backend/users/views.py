from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from .serializers import ProfileSerializer, SkillSerializer
from .models import Profile, Skill

class ProfileCRUDViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def partial_update(self, request, pk=None):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=self.request.user)

        response_data = {}
        for key in request.data:
            response_data[key] = serializer.data[key]

        return Response(response_data, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SkillsCRUDViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
