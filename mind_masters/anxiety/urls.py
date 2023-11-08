from django.views.generic import TemplateView

from .views import *
from django.urls import path

urlpatterns = [
    path('', index),
    path('graeme/', get_graeme_status),
    path('quiz-1/', get_quiz),
]

