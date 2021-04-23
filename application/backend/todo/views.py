from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .serializers import RoomsSerializer

from .models import Todo
from .models import Rooms


# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class RoomView(viewsets.ModelViewSet):
    serializer_class = RoomsSerializer
    queryset = Rooms.objects.all()


def submitpage(request):
    data = request.POST.get('data')
   

    if 'roomName' in request.POST:
        name = request.POST['roomName']
    else:
        name = False

    if 'roomGenre' in request.POST:
        genre = request.POST['roomGenre']
    else:
        genre = False
    ins = Rooms(room_name=name, genre=genre)
    ins.save()
    print("Saved to db")

    context = {'data': data}
    return (request, context)