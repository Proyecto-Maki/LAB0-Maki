from django.urls import path
from . import views

urlpatterns = [

    # personas
    path('personas/', views.PersonaListCreate.as_view(), name="personas"),
    path('personas/mayores_edad/', views.PersonaMayoresEdad.as_view(), name="mayores_edad"),
    path('personas/delete/<str:pk>/', views.PersonaDelete.as_view(), name="eliminar_persona"),
    path('personas/update/<str:pk>/', views.PersonaUpdate.as_view(), name="actualizar_persona"),
    path('persona/<str:pk>/', views.PersonaDetail.as_view(), name='persona-detail'),


    # regiones
    path('regiones/', views.RegionListCreate.as_view(), name="regiones"),
    path('regiones/delete/<int:pk>/', views.RegionDelete.as_view(), name="eliminar_region"),
    path('regiones/update/<int:pk>/', views.RegionUpdate.as_view(), name="actualizar_region"),

    # departamentos
    path('departamentos/', views.DepartamentoListCreate.as_view(), name="departamentos"),
    path('departamentos/delete/<int:pk>/', views.DepartamentoDelete.as_view(), name="eliminar_departamento"),
    path('departamentos/update/<int:pk>/', views.DepartamentoUpdate.as_view(), name="actualizar_departamento"),
    path('departamentos/region/<int:id_region>/', views.DepartamentoPorRegion.as_view(), name="departamento_region"),

    # municipios
    path('municipios/', views.MunicipioListCreate.as_view(), name="municipios"),
    path('municipios/delete/<int:pk>/', views.MunicipioDelete.as_view(), name="eliminar_municipio"),
    path('municipios/update/<int:pk>/', views.MunicipioUpdate.as_view(), name="actualizar_municipio"),
    path('municipios/departamento/<int:pk>/', views.MunicipioPorDepartamento.as_view(), name="municipio_departamento"),

    # mascotas
    path('mascotas/', views.MascotaListCreate.as_view(), name="mascotas"),
    path('mascotas/delete/<int:pk>/', views.MascotaDelete.as_view(), name="eliminar_mascota"),
    path('mascotas/update/<int:pk>/', views.MascotaUpdate.as_view(), name="actualizar_mascota"),
    path('mascotas/vivienda/<int:pk>/', views.MascotaPorVivienda.as_view(), name="mascota_vivienda"),

    # viviendas
    path('viviendas/', views.ViviendaListCreate.as_view(), name="viviendas"),
    path('viviendas/delete/<int:pk>/', views.ViviendaDelete.as_view(), name="eliminar_vivienda"),
    path('viviendas/update/<int:pk>/', views.ViviendaUpdate.as_view(), name="actualizar_vivienda"),
    path('viviendas/municipio/<int:pk>/', views.ViviendaPorMunicipio.as_view(), name="vivienda_municipio"),
    path('viviendas/persona/<str:pk>/', views.ViviendaPorPersona.as_view(), name="vivienda_persona"),

    
    path('viviendas/<int:id_municipio>/<int:id_departamento>/', views.ViviendaMunicipioDepartamento.as_view(), name='vivienda_municipio_departamento'),

    path('persona/vivienda/', views.PersonaResideViviendaListCreate.as_view(), name="persona_vivienda"),
    path('persona/vivienda/delete/<str:id_persona>/<int:id_vivienda>/', views.PersonaResideViviendaDelete.as_view(), name="eliminar_persona_vivienda"),
    path('persona/vivienda/update/<str:id_persona>/int:id_vivienda/', views.PersonaResideViviendaUpdate.as_view(), name="actualizar_persona_vivienda"),

    
]