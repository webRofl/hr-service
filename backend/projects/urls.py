from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProjectCRUDViewSet, TagCRUDViewSet

router = SimpleRouter()
router.register(r'projects', ProjectCRUDViewSet)
router.register(r'tags', TagCRUDViewSet)

urlpatterns = [
  path('api/v1/', include(router.urls)),
]
