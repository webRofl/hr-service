# Generated by Django 4.0.6 on 2023-02-05 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_tag_project_source_link_project_total_votes_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, default='projects/images/default.jpg', null=True, upload_to='projects'),
        ),
    ]