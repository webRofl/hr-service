# Generated by Django 4.0.6 on 2023-03-25 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0017_remove_project_reviews_project_reviews'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(default='', max_length=100),
        ),
    ]