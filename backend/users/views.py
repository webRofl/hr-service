from rest_framework import viewsets

from .serializers import ProfileSerializer, SkillSerializer
from .models import Profile, Skill

class ProfileCRUDViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class SkillsCRUDViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer