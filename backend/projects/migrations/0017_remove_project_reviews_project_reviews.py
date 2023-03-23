# Generated by Django 4.0.6 on 2023-03-14 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
        ('projects', '0016_delete_review_project_reviews_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='reviews',
        ),
        migrations.AddField(
            model_name='project',
            name='reviews',
            field=models.ManyToManyField(blank=True, to='reviews.review'),
        ),
    ]