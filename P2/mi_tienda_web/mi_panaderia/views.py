# -- Fichero mi_tienda/views.py
from django.http import HttpResponse
from django.shortcuts import render
from random import randint
from django.template import Template, Context
from django.template.loader import get_template
from mi_panaderia.models import Producto
from mi_panaderia.models import Pedidos
from datetime import datetime


def index(request):
    # -- Obtener fecha de hoy
    now = datetime.now()
    return render(request, 'index.html', {'numero':now})


def panaderia(request):

    return render(request, 'panaderia.html', )

def bolleria(request):

    return render(request, 'bolleria.html', )

def pasteleria(request):

    return render(request, 'pasteleria.html', )

def list(request):
    productos = Producto.objects.all()
    return render(request, 'listado.html', {'productos':productos})


def formulario(request):
    return render(request, 'formulario.html', {})


def recepcion(request):
    # -- Obtener el nombre de la persona
    persona = request.POST['nombre']
    articulo = request.POST['articulo']
    # -- Imprimirlo en la consola del servidor
    print(f" PEDIDO RECIBIDO!!! ----> {persona + articulo}")
    p= Pedidos(nombre=persona , articulo=articulo)
    p.save()
    return HttpResponse("Datos recibidos!!. Comprador: " + request.POST['nombre'])

def pedidos(request):

    pedidos = Pedidos.objects.all()
    return render(request, 'pedidos.html', {'pedidos':pedidos})
