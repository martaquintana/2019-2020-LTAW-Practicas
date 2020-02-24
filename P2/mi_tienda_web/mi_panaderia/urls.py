from django.urls import path

# -- Importar todas las vistas de mi_tienda
from . import views

# -- Aquí se definen las URLs de nuestra tienda
# -- Metemos de momento sólo la principal (índice)

urlpatterns = [
    # -- Vista pricipal (índice)
    path('', views.index, name='index'),
    path('panaderia.html/', views.panaderia, name='panaderia'),
    path('bolleria.html/', views.bolleria, name='bolleria'),
    path('pasteleria.html/', views.pasteleria, name='pasteleria'),
    path('list/', views.list, name='list'),
]
