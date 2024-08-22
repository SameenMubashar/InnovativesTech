from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UserApp.models import Users
from UserApp.serializers import UsersSerializer

# Create your views here.
@csrf_exempt
def UserApi(request, id=0):
    if request.method == 'GET':
        users = Users.objects.all()
        users_serializer = UsersSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
    
    elif request.method == 'POST':
        users_data = JSONParser().parse(request)
        users_serializer = UsersSerializer(data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse('Added Successfully', safe=False)
        return JsonResponse('Failed to Add', safe=False)
    
    elif request.method == 'PUT':
        users_data = JSONParser().parse(request)
        user = Users.objects.get(UsersId=users_data['UsersId'])
        users_serializer = UsersSerializer(user, data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse('Update Successfully', safe=False)
        return JsonResponse('Failed to Update')
    
    elif request.method == "DELETE":
        user = Users.objects.get(UsersId=id)
        print(user)
        user.delete()
        return JsonResponse('Deleted Successfully', safe=False)