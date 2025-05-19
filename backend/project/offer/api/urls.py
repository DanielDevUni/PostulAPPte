from rest_framework.routers import DefaultRouter
from offer.api.views import OfferViewSet

router = DefaultRouter()
router.register('', OfferViewSet, basename='offer')
urlpatterns = router.urls