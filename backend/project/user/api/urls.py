from rest_framework.routers import DefaultRouter
from user.api.views import UserViewSet, hello_world
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path

router = DefaultRouter()
router.register('', UserViewSet, basename='user')

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('test/', hello_world, name='token_refresh'),
]

urlpatterns += router.urls
