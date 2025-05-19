from rest_framework import serializers
from offer.models import Offer, ChargeType, Rank

class OfferSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    charge_type = serializers.PrimaryKeyRelatedField(queryset=ChargeType.objects.all())
    rank = serializers.PrimaryKeyRelatedField(queryset=Rank.objects.all())

    class Meta:
        model = Offer
        fields = [
            'offer_id',
            'user',
            'charge_type',
            'rank',
            'name',
            'level',
            'title',
            'function',
            'salary',
            'date_start',
            'date_finish',
            'status',
            'created_at'
        ]