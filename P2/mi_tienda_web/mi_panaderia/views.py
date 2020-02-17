# -- Fichero mi_tienda/views.py
from django.http import HttpResponse
from django.shortcuts import render
from random import randint
from django.template import Template, Context
from django.template.loader import get_template

def index(request):
    # -- Obtener el número aleatorio
    numero = randint(0, 100)
    return render(request, 'index.html', {'numero':str(numero)})
