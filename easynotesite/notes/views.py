from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import json
import g4f
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
    if request.method == "POST":
        # get the raw text from the request body
        body_unicode = request.body.decode('utf-8')
        
        body = json.loads(body_unicode)
        raw_text_content = body['data']
        action = "Summarize this text: "
        print(raw_text_content)

        g4f.logging = True # enable logging
        g4f.check_version = False # Disable automatic version checking

        # normal response
        response = g4f.ChatCompletion.create(
            model=g4f.models.gpt_4,
            messages=[{"role": "user", "content": action + raw_text_content}],
        )  # alterative model setting

        return JsonResponse({"success": True, "message": "Successfully enhanced raw text", "data": response})
    return JsonResponse({"success": False, "message": "Failed to enhance raw text"})