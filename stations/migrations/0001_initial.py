# Generated by Django 5.0.1 on 2024-01-17 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Station',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('station_name', models.CharField(max_length=100)),
                ('station_desc', models.TextField(blank=True, null=True)),
                ('location', models.CharField(max_length=100)),
                ('id_zone', models.IntegerField()),
            ],
        ),
    ]
