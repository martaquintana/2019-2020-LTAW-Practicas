from django.contrib import admin

# Register your models here.
# -- Fichero mi_tienda/admin.py
from django.contrib import admin
from mi_tienda.models import Producto

admin.site.register(Producto)
