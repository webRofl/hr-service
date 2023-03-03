from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProfileCRUDViewSet, SkillsCRUDViewSet

router = SimpleRouter()
router.register(r'users', ProfileCRUDViewSet)
router.register(r'skills', SkillsCRUDViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]

