# Generated by Django 4.0.6 on 2023-04-04 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_workplace_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='response',
            name='title',
            field=models.CharField(default='great', max_length=255),
            preserve_default=False,
        ),
    ]