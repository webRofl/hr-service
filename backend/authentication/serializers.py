from rest_framework import serializers
from django.contrib.auth import authenticate
from datetime import datetime, timedelta
import jwt

from .models import User
from home import settings
from helpers.generate_jwt_tokens import generate_jwt_tokens


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ["email", "username", "password"]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255, write_only=True)
    password = serializers.CharField(max_length=128, write_only=True)

    username = serializers.CharField(max_length=255, read_only=True)
    access = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)
    id = serializers.CharField(read_only=True)

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)

        if email is None:
            raise serializers.ValidationError("An email address is required to log in.")

        if password is None:
            raise serializers.ValidationError("A password is required to log in.")

        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError(
                "A user with this email and password was not found."
            )

        if not user.is_active:
            raise serializers.ValidationError("This user has been deactivated.")

        return {"email": user.email, "username": user.username, "id": user.id}

    def create(self, validated_data):
        response = {}

        tokens = generate_jwt_tokens(validated_data)

        response.update(tokens)
        response.update(validated_data)

        return response


class RefreshSerializer(serializers.Serializer):
    refresh_token = serializers.CharField(required=True, write_only=True)

    access = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)

    def validate(self, data):
        refresh_token = data["refresh_token"]

        if refresh_token is None:
            raise serializers.ValidateError("Token is not defined.")

        if len(refresh_token.split()) != 1:
            raise serializers.ValidationError("Token is not correct.")

        try:
            payload = jwt.decode(
                jwt=refresh_token,
                key=settings.SECRET_KEY,
                algorithms=[
                    "HS256",
                ],
            )

            if payload["type"] != "refresh":
                raise serializers.ValidationError("Token type is not refresh.")

            data["payload"] = payload
        except jwt.ExpiredSignatureError:
            raise serializers.ValidationError("Refresh token is expired.")
        except jwt.InvalidTokenError:
            raise serializers.ValidationError("Refresh token is invalid.")

        return data

    def create(self, validated_data):
        tokens = generate_jwt_tokens(validated_data["payload"])

        return tokens


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True)

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "username",
            "password",
        )

    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password is not None:
            instance.set_password(password)

        instance.save()

        return instance
