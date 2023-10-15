from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path('record/', views.recordView),
    path('AIView/', views.AIView),
]