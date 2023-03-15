from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ReviewCRUDViewSet

router = SimpleRouter()
router.register(r'reviews', ReviewCRUDViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]

