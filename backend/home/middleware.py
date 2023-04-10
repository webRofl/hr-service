from django.contrib.auth.models import AnonymousUser
from rest_framework.authtoken.models import Token
from channels.db import database_sync_to_async
from channels.middleware import BaseMiddleware

from authentication.backends import JWTAuthentication

@database_sync_to_async
def get_user(token):
    res = JWTAuthentication()._authenticate_credentials({}, token)
    return res[0]

class TokenAuthMiddleware(BaseMiddleware):
    def __init__(self, inner):
        super().__init__(inner)

    async def __call__(self, scope, receive, send):
        try:
            token = ''
            for key, value in scope["headers"]:
                print(key, value)
                if key == b'sec-websocket-protocol':
                    parsed_value = value.decode('utf-8').split(', ')
                    token = parsed_value[1] if len(parsed_value) == 2 else None
                if key == b'authentication':
                    parsed_value = value.decode('utf-8').split(' ')
                    token = parsed_value[1] if len(parsed_value) == 2 else None


        except ValueError:
            token = None
        scope['user'] = AnonymousUser() if token is None else await get_user(token)
        return await super().__call__(scope, receive, send)