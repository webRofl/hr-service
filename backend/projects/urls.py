from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import TagCRUDViewSet, ProjectRetrieveView, ProjectList, ProjectCreateAndUpdateView

router = SimpleRouter()
router.register(r'tags', TagCRUDViewSet)

urlpatterns = [
  path('api/v1/projects/list/', ProjectList.as_view()),
  path('api/v1/projects/get/<uuid:pk>/', ProjectRetrieveView.as_view({
      'get': 'retrieve',
  })),
  path('api/v1/projects/<uuid:pk>/', ProjectCreateAndUpdateView.as_view({
      'put': 'update',
  })),
  path('api/v1/projects/', ProjectCreateAndUpdateView.as_view({
      'post': 'create',
  })),
  path('api/v1/', include(router.urls)),
]
