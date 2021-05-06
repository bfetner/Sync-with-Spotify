from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class Users(models.Model):
    display_name = models.CharField(max_length=255)
    profile_pic = models.CharField(max_length=1000)
    user_id = models.CharField(max_length=255)

class Rooms(models.Model):
 #  room_id = models.CharField(max_length=20)
    room_name = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    roomImageUrl = models.CharField(max_length=255,null=True)

    def _str_(self):
        return self.room_name

class Room_list(models.Model):
    #room_name = models.CharField(Rooms, on_delete=models.CASCADE)
    room_list_title = models.CharField(max_length=255)

class Vote(models.Model):                      
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE) # number of user_id gives us the count
    vote_id = models.CharField(max_length=255)
    room_id = models.ForeignKey(Rooms, on_delete=models.CASCADE)

class Participants(models.Model):
    room_id = models.ForeignKey(Rooms, on_delete=models.CASCADE)
    user_id = models.CharField(max_length=255)

class Queue(models.Model):
    room_id = models.ForeignKey(Rooms, on_delete=models.CASCADE)
    queue_id = models.CharField(max_length=255)
    song_list_id = models.IntegerField()
    queue_history = models.CharField(max_length=255)

  

    
  

# class UserAccountManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)

#         user.set_password(password)
#         user.save()

#         return user

# class UserAccount(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = UserAccountManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name']

#     def get_full_name(self):
#         return self.first_name

#     def get_short_name(self):
#         return self.first_name
    
#     def __str__(self):
#         return self.email