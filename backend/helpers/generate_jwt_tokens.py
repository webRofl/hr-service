from datetime import datetime, timedelta
import jwt

from home import settings

def generate_jwt_tokens(validated_data):
    access_payload = {
        "iss": "backend-api",
        "email": validated_data["email"],
        "exp": datetime.utcnow() + timedelta(seconds=settings.JWT_ACCESS_TTL),
        "type": "access",
    }
    access = jwt.encode(payload=access_payload, key=settings.SECRET_KEY)

    refresh_payload = {
        "iss": "backend-api",
        "email": validated_data["email"],
        "exp": datetime.utcnow() + timedelta(seconds=settings.JWT_REFRESH_TTL),
        "type": "refresh",
    }
    refresh = jwt.encode(payload=refresh_payload, key=settings.SECRET_KEY)

    return {"access": access, "refresh": refresh}
