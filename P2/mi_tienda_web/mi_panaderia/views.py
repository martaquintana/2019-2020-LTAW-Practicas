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
    

    return render(request, 'panaderia.html', )

def bolleria(request):

    return render(request, 'bolleria.html', )

def pasteleria(request):

    return render(request, 'pasteleria.html', )

def list(request):
    productos = Producto.objects.all()
    return render(request, 'listado.html', {'productos':productos})
