# Generated by Django 5.2.1 on 2025-05-15 04:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offer', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offer',
            name='level',
            field=models.CharField(choices=[('tecnico', 'Técnico'), ('tecnologo', 'Tecnólogo'), ('profesional', 'Profesional'), ('especializacion', 'Especialización'), ('maestria', 'Maestría'), ('doctorado', 'Doctorado')], max_length=20),
        ),
    ]
