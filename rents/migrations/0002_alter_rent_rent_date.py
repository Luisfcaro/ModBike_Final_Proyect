# Generated by Django 5.0.1 on 2024-02-19 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rent',
            name='rent_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
