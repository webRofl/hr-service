from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProjectCRUViewSet, TagCRUDViewSet, ProjectList

router = SimpleRouter()
router.register(r'tags', TagCRUDViewSet)
# router.register(r'projects', ProjectCRUViewSet)

urlpatterns = [
  path('api/v1/projects/list/', ProjectList.as_view()),
  path('api/v1/projects/<uuid:pk>/', ProjectCRUViewSet.as_view(
                      {
                          'get': 'retrieve',
                          'put': 'update',
                      }
                  ), name='projects_retrieve_and_update'),
  path('api/v1/projects/', ProjectCRUViewSet.as_view(
                      {
                          'post': 'create',
                      }
                  ), name='projects_create'),
  path('api/v1/', include(router.urls)),
]
