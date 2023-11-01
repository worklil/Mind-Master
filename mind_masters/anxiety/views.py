from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return HttpResponse("<h1> Hello World </h1>")


def get_graeme_status(request):
    return HttpResponse("<h1>Graeme is a dick</h1>")

