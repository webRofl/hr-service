from django.urls import path

from .views import (
    LoginAPIView,
    RegistrationAPIView,
    UserRetrieveUpdateAPIView,
    RefreshView,
)

app_name = "authentication"
urlpatterns = [
    path("api/v1/auth/user/", UserRetrieveUpdateAPIView.as_view()),
    path("api/v1/auth/register/", RegistrationAPIView.as_view()),
    path("api/v1/auth/login/", LoginAPIView.as_view()),
    path("api/v1/auth/refresh/", RefreshView.as_view()),
]
