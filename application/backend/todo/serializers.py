# from djoser.serializers import UserCreateSerializer
# from django.contrib.auth import get_user_model

from rest_framework import serializers
from .models import Todo
from .models import Rooms


# User = get_user_model()


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description')

class RoomsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rooms
        fields = ('id','room_name', 'genre' ,'roomImageUrl')

# class UserCreateSerializer(UserCreateSerializer):
#     class Meta(UserCreateSerializer.Meta):
#         model = User
#         fields = ('id', 'email', 'first_name', 'last_name', 'password')