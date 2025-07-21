from rest_framework import viewsets
from user.models import CustomUser
from user.api.serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


@api_view()
def hello_world(request):
    if request.user.is_authenticated:
        return Response({"message": request.user.email})
    else:
        return Response({"message": "Not logged in"})