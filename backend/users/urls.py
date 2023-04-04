from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import SkillsCRUDViewSet, EmployeeProfileCRUDViewSet, EmployerProfileCRUDViewSet

router = SimpleRouter()
router.register(r'users/employee', EmployeeProfileCRUDViewSet)
router.register(r'users/employer', EmployerProfileCRUDViewSet)
router.register(r'skills', SkillsCRUDViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]

