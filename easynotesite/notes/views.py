from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.
def index(request):
    responseData = {
        "success": True,
        "message": "hello",
        "data": {
            "name": "Alexa"
        }
    }
    return JsonResponse(responseData);
    # return HttpResponse("Hello, world. You're at the notes index.")
