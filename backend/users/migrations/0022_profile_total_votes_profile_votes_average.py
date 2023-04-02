# Generated by Django 4.0.6 on 2023-04-02 19:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0021_profile_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='total_votes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='votes_average',
            field=models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]