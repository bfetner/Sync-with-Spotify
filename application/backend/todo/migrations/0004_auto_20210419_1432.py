# Generated by Django 3.2 on 2021-04-19 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_remove_rooms_room_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='rooms',
            options={},
        ),
        migrations.AddField(
            model_name='rooms',
            name='roomImageUrl',
            field=models.CharField(max_length=255, null=True),
        ),
    ]