from django.db import models
from django.conf import settings

class ChargeType(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'charge_types'

class Rank(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'ranks'

class Offer(models.Model):
    offer_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='created_offers'
    )
    charge_type = models.ForeignKey(ChargeType, on_delete=models.CASCADE)
    rank = models.ForeignKey(Rank, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    LEVEL_CHOICES = [
        ('tecnico', 'Técnico'),
        ('tecnologo', 'Tecnólogo'),
        ('profesional', 'Profesional'),
        ('especializacion', 'Especialización'),
        ('maestria', 'Maestría'),
        ('doctorado', 'Doctorado'),
    ]
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    title = models.CharField(max_length=200)
    function = models.TextField()
    salary = models.DecimalField(max_digits=12, decimal_places=2)
    date_start = models.DateField()
    date_finish = models.DateField()
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        db_table = 'offers'