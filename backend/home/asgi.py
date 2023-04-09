import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from .middleware import TokenAuthMiddleware

from notification.routing import websocket_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'home.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": 
        TokenAuthMiddleware(URLRouter(websocket_urlpatterns)),
})
