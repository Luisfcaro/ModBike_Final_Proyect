# Generated by Django 5.0.1 on 2024-01-31 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0002_alter_station_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='station',
            name='id_zone',
        ),
        migrations.AddField(
            model_name='station',
            name='image',
            field=models.CharField(default='https://picsum.photos/id/69', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='station',
            name='station_status',
            field=models.CharField(default='Operativa', max_length=100, null=True),
        ),
    ]