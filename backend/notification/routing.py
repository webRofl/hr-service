from django.urls import re_path

from .consumer import NotificationConsumer

websocket_urlpatterns = [
    re_path(r'notifications', NotificationConsumer.as_asgi()),
]
