from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from helpers.get_data_with_user import get_data_with_user
from .models import Response as ResponseModel
from .serializers import ResponsePostSerializer, ResponseGetSerializer
from helpers.permissions import is_owner
from users.models import EmployerProfile

class ResponseCRUDViewSet(viewsets.ModelViewSet):
    queryset = ResponseModel.objects.all()
    serializer_class = ResponsePostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    http_method_names = ['get', 'post']

    def retrieve(self, request, pk=None):
        if is_owner(request):
            response = self.queryset.get(pk=pk)
            serializer = ResponseGetSerializer(response, context={'request': request})

            return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request):
        if is_owner(request):
            employer_instance = EmployerProfile.objects.get(user=request.user.id)
            serializer = ResponseGetSerializer(self.queryset.filter(target=employer_instance), many=True, context={'request': request})

            return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        data = get_data_with_user(request, 'author')

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
