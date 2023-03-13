# Generated by Django 4.0.6 on 2023-03-13 15:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0014_alter_project_votes_average'),
        ('users', '0017_profile_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='projects',
            field=models.ForeignKey(default='f24261fe-2a99-4350-9441-3d459f85999f', on_delete=django.db.models.deletion.CASCADE, to='projects.project'),
            preserve_default=False,
        ),
    ]
