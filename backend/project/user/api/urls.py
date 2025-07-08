from rest_framework.routers import DefaultRouter
from user.api.views import UserViewSet, hello_world, RegisterView, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path

router = DefaultRouter()
router.register('', UserViewSet, basename='user')

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('test/', hello_world, name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
]

urlpatterns += router.urls