from django.urls import path, include

from .views import SkillsCRUDViewSet, EmployeeProfileReceiveView, EmployeeProfilePostView, EmployeeProfileListView, EmployerProfileReceiveView, EmployerProfilePostView

urlpatterns = [
    # Employer
    path('api/v1/users/employer/', EmployerProfilePostView.as_view({
        'post': 'create',
    })),
    path('api/v1/users/employer/<uuid:pk>/', EmployerProfilePostView.as_view({
        'put': 'update',
    })),
    path('api/v1/users/employer/get/<uuid:pk>/', EmployerProfileReceiveView.as_view({
        'get': 'retrieve',
    })),

    # Employee
    path('api/v1/users/employee/', EmployeeProfilePostView.as_view({
        'post': 'create',
    })),
    path('api/v1/users/employee/<uuid:pk>/', EmployeeProfilePostView.as_view({
        'put': 'update',
    })),
    path('api/v1/users/employee/get/<uuid:pk>/', EmployeeProfileReceiveView.as_view({
        'get': 'retrieve',
    })),
    path('api/v1/users/employee/list/', EmployeeProfileListView.as_view({
        'get': 'list',
    })),
]
