# Generated by Django 4.0.6 on 2023-02-05 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, default='projects/images/default.png', null=True, upload_to='projects'),
        ),
    ]