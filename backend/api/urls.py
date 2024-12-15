from django.urls import path
from . import views

urlpatterns = [
    path('personas/', views.PersonaListCreate.as_view(), name="personas"),
    path('personas/mayores_edad/', views.PersonaMayoresEdad.as_view(), name="mayores_edad"),
    path('personas/delete/<str:pk>/', views.PersonaDelete.as_view(), name="eliminar_persona"),
    path('personas/update/<str:pk>/', views.PersonaUpdate.as_view(), name="actualizar_persona"),
]