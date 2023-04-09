import jwt

from home import settings


def is_owner(request):
    try:
        user_id = request.user.id
        token = jwt.decode(
            jwt=request.auth, key=settings.SECRET_KEY, algorithms=["HS256"]
        )

        if user_id == None:
            raise Exception("User Id not found")

        if token['id'] == None:
            raise Exception("Id not found in JWT Token")
        
        return str(user_id) == token['id']
    except:
        return False
