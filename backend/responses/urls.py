from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ResponseCRUDViewSet

router = SimpleRouter()
router.register(r'responses', ResponseCRUDViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]

