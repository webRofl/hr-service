from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProjectCRUDViewSet

router = SimpleRouter()
router.register(r'projects', ProjectCRUDViewSet)

urlpatterns = [
  path('api/v1/', include(router.urls)),
]
