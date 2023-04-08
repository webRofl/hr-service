import jwt
from django.conf import settings
from rest_framework import authentication, exceptions
from uuid import UUID

from .models import User
from home.settings import JWT_HEADER_PREFIX


class JWTAuthentication(authentication.BaseAuthentication):
    authentication_header_prefix = JWT_HEADER_PREFIX

    def authenticate(self, request):
        request.user = None

        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            return None

        if len(auth_header) == 1:
            return None

        elif len(auth_header) > 2:
            return None

        prefix = auth_header[0].decode("utf-8")
        token = auth_header[1].decode("utf-8")

        if prefix.lower() != auth_header_prefix:
            return None

        return self._authenticate_credentials(request, token)

    def _authenticate_credentials(self, request, token):
        try:
            payload = jwt.decode(
                jwt=token,
                key=settings.SECRET_KEY,
                algorithms=[
                    "HS256",
                ],
            )
        except Exception:
            msg = "Authentication error. The token cannot be decoded."
            raise exceptions.AuthenticationFailed(msg)

        try:
            user = User.objects.get(id=UUID(payload["id"]))
        except User.DoesNotExist:
            msg = "The user corresponding to this token was not found."
            raise exceptions.AuthenticationFailed(msg)

        if not user.is_active:
            msg = "This user has been deactivated."
            raise exceptions.AuthenticationFailed(msg)

        return (user, token)
