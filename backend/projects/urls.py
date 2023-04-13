from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProjectCRUViewSet, TagCRUDViewSet, ProjectList

router = SimpleRouter()
router.register(r'tags', TagCRUDViewSet)
router.register(r'projects', ProjectCRUViewSet)

urlpatterns = [
  path('api/v1/projects/', ProjectList.as_view()),
  path('api/v1/', include(router.urls)),
]
