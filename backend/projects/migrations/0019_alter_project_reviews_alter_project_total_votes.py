# Generated by Django 4.0.6 on 2023-03-29 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_projectreview'),
        ('projects', '0018_alter_project_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='reviews',
            field=models.ManyToManyField(blank=True, related_name='+', to='reviews.projectreview'),
        ),
        migrations.AlterField(
            model_name='project',
            name='total_votes',
            field=models.IntegerField(default=0),
        ),
    ]
