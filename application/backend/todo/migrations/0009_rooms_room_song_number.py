# Generated by Django 3.2.2 on 2021-05-17 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0008_nextsong'),
    ]

    operations = [
        migrations.AddField(
            model_name='rooms',
            name='room_song_number',
            field=models.CharField(default=True, max_length=255),
        ),
    ]