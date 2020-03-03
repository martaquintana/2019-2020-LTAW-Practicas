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
    productos = Producto.objects.all()
    return render(request, 'panaderia.html',{
    #--Pistolas
    'precio1':productos[0].precio,
    'nombre1':productos[0].nombre,
    'stock1':productos[0].stock,
    #--Chapata
    'precio2':productos[1].precio,
    'nombre2':productos[1].nombre,
    'stock2':productos[1].stock,
    #--Gallega
    'precio3':productos[2].precio,
    'nombre3':productos[2].nombre,
    'stock3':productos[2].stock,
    #--Candeal
    'precio4':productos[3].precio,
    'nombre4':productos[3].nombre,
    'stock4':productos[3].stock,
    #--Integral
    'precio5':productos[4].precio,
    'nombre5':productos[4].nombre,
    'stock5':productos[4].stock,
    } )

def bolleria(request):
    productos = Producto.objects.all()
    return render(request, 'bolleria.html',{
    #--Magdalenas
    'precio1':productos[7].precio,
    'nombre1':productos[7].nombre,
    'stock1':productos[7].stock,
    #--Donuts
    'precio2':productos[5].precio,
    'nombre2':productos[5].nombre,
    'stock2':productos[5].stock,
    #--Palmeras
    'precio3':productos[6].precio,
    'nombre3':productos[6].nombre,
    'stock3':productos[6].stock,
    })

def pasteleria(request):
    productos = Producto.objects.all()
    return render(request, 'pasteleria.html',{
    #--Pasteles
    'precio1':productos[8].precio,
    'nombre1':productos[8].nombre,
    'stock1':productos[8].stock,
    #--Tarta Plancha
    'precio2':productos[9].precio,
    'nombre2':productos[9].nombre,
    'stock2':productos[9].stock,
    #--Tarta Circular
    'precio3':productos[10].precio,
    'nombre3':productos[10].nombre,
    'stock3':productos[10].stock,
    } )

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
