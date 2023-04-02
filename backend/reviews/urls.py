from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProjectReviewCRUDViewSet, ProfileReviewCRUDViewSet

router = SimpleRouter()
router.register(r'reviews/project', ProjectReviewCRUDViewSet)
router.register(r'reviews/profile', ProfileReviewCRUDViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]

