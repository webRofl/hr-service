# Generated by Django 4.0.6 on 2023-04-28 13:05

from django.db import migrations
import django_resized.forms


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_employeeprofile_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeeprofile',
            name='image',
            field=django_resized.forms.ResizedImageField(crop=None, default='users/images/default.png', force_format='WEBP', keep_meta=True, quality=75, scale=None, size=[1920, 1080], upload_to='users/images'),
        ),
        migrations.AlterField(
            model_name='employerprofile',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, force_format='WEBP', keep_meta=True, null=True, quality=75, scale=None, size=[1920, 1080], upload_to='users/images'),
        ),
        migrations.AlterField(
            model_name='workplace',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, force_format='WEBP', keep_meta=True, null=True, quality=75, scale=None, size=[1920, 1080], upload_to='users/images'),
        ),
    ]
