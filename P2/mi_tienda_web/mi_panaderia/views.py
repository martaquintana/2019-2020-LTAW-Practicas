# -- Fichero mi_tienda/views.py
from django.http import HttpResponse
from django.shortcuts import render
from random import randint
from django.template import Template, Context
from django.template.loader import get_template
from mi_panaderia.models import Producto


def index(request):
    # -- Obtener el número aleatorio
    numero = randint(0, 100)
    return render(request, 'index.html', {'numero':str(numero)})


def panaderia(request):
    # -- Obtener el número aleatorio
    numero = randint(0, 100)
    return render(request, 'panaderia.html', {'numero':str(numero)})

def bolleria(request):
    # -- Obtener el número aleatorio
    numero = randint(0, 100)
    return render(request, 'bolleria.html', {'numero':str(numero)})

def pasteleria(request):
    # -- Obtener el número aleatorio
    numero = randint(0, 100)
    return render(request, 'pasteleria.html', {'numero':str(numero)})

def list(request):
    productos = Producto.objects.all()
    return render(request, 'listado.html', {'productos':productos})
