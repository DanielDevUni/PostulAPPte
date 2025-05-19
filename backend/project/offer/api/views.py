from rest_framework import viewsets
from offer.models import Offer
from offer.api.serializers import OfferSerializer

class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer