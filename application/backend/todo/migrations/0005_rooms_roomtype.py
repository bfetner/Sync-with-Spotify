# Generated by Django 3.2 on 2021-05-07 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0004_auto_20210506_1747'),
    ]

    operations = [
        migrations.AddField(
            model_name='rooms',
            name='roomType',
            field=models.BooleanField(default=False),
        ),
    ]
