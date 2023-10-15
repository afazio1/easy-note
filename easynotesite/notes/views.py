from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import json
# Create your views here.
def index(request):
    responseData = {
        "success": True,
        "message": "hello",
        "data": {
            "name": "Alexa"
        }
    }
    return JsonResponse(responseData)
    # return HttpResponse("Hello, world. You're at the notes index.")

def recordView(request):
        return HttpResponse("Hello world, you are at record view.")
    
def AIView(request):
    return HttpResponse("Hello world, you are at AI view.")