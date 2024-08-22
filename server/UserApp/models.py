from django.db import models

# Create your models here.
class Users(models.Model):
    UsersId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=500)
    LastName = models.CharField(max_length=500)
    Email = models.CharField(max_length=500)


