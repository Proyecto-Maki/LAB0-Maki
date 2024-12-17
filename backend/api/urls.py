from django.urls import path
from . import views

urlpatterns = [
    path('personas/', views.PersonaListCreate.as_view(), name="personas"),
    path('personas/mayores_edad/', views.PersonaMayoresEdad.as_view(), name="mayores_edad"),
    path('personas/delete/<str:pk>/', views.PersonaDelete.as_view(), name="eliminar_persona"),
    path('personas/update/<str:pk>/', views.PersonaUpdate.as_view(), name="actualizar_persona"),
    path('regiones/', views.RegionListCreate.as_view(), name="regiones"),
    path('regiones/delete/<int:pk>/', views.RegionDelete.as_view(), name="eliminar_region"),
    path('regiones/update/<int:pk>/', views.RegionUpdate.as_view(), name="actualizar_region"),
    path('departamentos/', views.DepartamentoListCreate.as_view(), name="departamentos"),
    path('departamentos/delete/<int:pk>/', views.DepartamentoDelete.as_view(), name="eliminar_departamento"),
    path('departamentos/update/<int:pk>/', views.DepartamentoUpdate.as_view(), name="actualizar_departamento"),
    path('departamentos/region/<int:pk>/', views.DepartamentoPorRegion.as_view(), name="departamento_region"),
    path('municipios/', views.MunicipioListCreate.as_view(), name="municipios"),
    path('municipios/delete/<int:pk>/', views.MunicipioDelete.as_view(), name="eliminar_municipio"),
    path('municipios/update/<int:pk>/', views.MunicipioUpdate.as_view(), name="actualizar_municipio"),

    
]