# Generated by Django 4.0.6 on 2023-04-09 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('responses', '0003_alter_response_author_alter_response_target'),
        ('users', '0010_remove_employerprofile_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='employerprofile',
            name='responses',
            field=models.ManyToManyField(blank=True, to='responses.response'),
        ),
    ]
