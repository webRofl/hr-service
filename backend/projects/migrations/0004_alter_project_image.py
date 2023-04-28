# Generated by Django 4.0.6 on 2023-04-28 13:05

from django.db import migrations
import django_resized.forms


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_alter_project_experience'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, default='projects/images/default.png', force_format='WEBP', keep_meta=True, null=True, quality=75, scale=None, size=[1920, 1080], upload_to='projects/images'),
        ),
    ]
