# Generated by Django 4.0.6 on 2023-04-18 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_employerprofile_responses'),
    ]

    operations = [
        migrations.AddField(
            model_name='employeeprofile',
            name='position',
            field=models.CharField(default='frontend', max_length=128),
            preserve_default=False,
        ),
    ]
