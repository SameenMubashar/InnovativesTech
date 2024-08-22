from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserApi, name='user-api'),
    path('users/<int:id>', views.UserApi, name='remove-user'),  # Assuming `UserDetail` view expects an ID
]