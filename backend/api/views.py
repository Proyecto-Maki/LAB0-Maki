from datetime import datetime
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.exceptions import ValidationError
from .serializers import UserSerializer, PersonaSerializer, RegionSerializer, DepartamentoSerializer, MunicipioSerializer, ViviendaSerializer, MascotaSerializer, PersonaResideViviendaSerializer, 
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Persona, Region, Departamento, Municipio, Vivienda, Mascota, PersonaResideVivienda, 

# Create your views here.

## Vista de PERSONA
class PersonaListCreate(generics.ListCreateAPIView):
    serializer_class = PersonaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Persona.objects.all()
    
    def validar_edad(self, fecha_nacimiento):
        # Verificar que la persona sea mayor de edad
        fecha_actual = datetime.now().date()
        edad = fecha_actual.year - fecha_nacimiento.year - ((fecha_actual.month, fecha_actual.day) < (fecha_nacimiento.month, fecha_nacimiento.day))
        return edad >= 18
    
    def get_mayores_edad(self):
        mayores_edad = []
        for persona in Persona.objects.all():
            # fecha_nacimiento = persona.fecha_nacimiento
            if self.validar_edad(persona.fecha_nacimiento):
                mayores_edad.append(persona)
        return mayores_edad
    
    def perform_create(self, serializer):
        fecha_nacimiento = serializer.validated_data["fecha_nacimiento"]
        cabeza_familia = serializer.validated_data.get("id_cabeza_familia", None)
        id_persona = serializer.validated_data["id_persona"]
        # Validar si la persona no tiene cabeza de familia asignado
        if cabeza_familia is None:
            if self.validar_edad(fecha_nacimiento):
                # Si es mayor de edad, se asigna a sí misma como cabeza de familia
                serializer.save()
                serializer.instance.id_cabeza_familia = serializer.instance
            else:
                # Si no es mayor de edad y no tiene cabeza de familia, se lanza un error
                raise ValidationError("La persona debe ser mayor de edad o tener un cabeza de familia mayor de edad asignado.")
        else:
            # Si ya tiene un cabeza de familia especificado, se guarda directamente
            if self.validar_edad(cabeza_familia.fecha_nacimiento):
                # Si es mayor de edad, se asigna a sí misma como cabeza de familia
                serializer.save()
            else:
                # Si no es mayor de edad y no tiene cabeza de familia, se lanza un error
                raise ValidationError("La persona debe ser mayor de edad o tener un cabeza de familia mayor de edad asignado.")
            

class PersonaMayoresEdad(generics.ListAPIView):
    serializer_class = PersonaSerializer
    permission_classes = [AllowAny]

    def validar_edad(self, fecha_nacimiento):
        # Verificar que la persona sea mayor de edad
        fecha_actual = datetime.now().date()
        edad = fecha_actual.year - fecha_nacimiento.year - ((fecha_actual.month, fecha_actual.day) < (fecha_nacimiento.month, fecha_nacimiento.day))
        return edad >= 18
    
    def get_queryset(self):
        mayores_edad = []
        for persona in Persona.objects.all():
            if self.validar_edad(persona.fecha_nacimiento):
                mayores_edad.append(persona)
        return mayores_edad

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
class PersonaDelete(generics.DestroyAPIView):
    serializer_class = PersonaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Persona.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class PersonaUpdate(generics.UpdateAPIView):
    serializer_class = PersonaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Persona.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()


## Vista de REGION
class RegionListCreate(generics.ListCreateAPIView):
    serializer_class = RegionSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Region.objects.all()

## Vista de DEPARTAMENTO

## Vista de MUNICIPIO

## Vista de VIVIENDA

## Vista de MASCOTA

## Vista de PERSONA RESIDE VIVIENDA

## Vista de VIVIENDA RESIDE MUNICIPIO







## Crear USUARIO
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


