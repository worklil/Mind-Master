from .views import *
from django.urls import path

urlpatterns = [
    path('', index),
    path('graeme/', get_graeme_status)
]

