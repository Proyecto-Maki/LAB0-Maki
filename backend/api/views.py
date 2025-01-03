from datetime import datetime
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.exceptions import ValidationError
from .serializers import UserSerializer, PersonaSerializer, RegionSerializer, DepartamentoSerializer, MunicipioSerializer, ViviendaSerializer, MascotaSerializer, PersonaResideViviendaSerializer
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Persona, Region, Departamento, Municipio, Vivienda, Mascota, PersonaResideVivienda

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
                # serializer.save()
                # serializer.instance.id_cabeza_familia = serializer.instance
                # serializer.save()

                instance = serializer.save()
                # Asignar a sí misma como cabeza de familia
                instance.id_cabeza_familia = instance
                # Guardar solo el campo actualizado
                instance.save(update_fields=["id_cabeza_familia"])
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
            
class PersonaDetail(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer

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
    
    def perform_create(self, serializer):
        serializer.save()

class RegionDelete(generics.DestroyAPIView):
    serializer_class = RegionSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Region.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class RegionUpdate(generics.UpdateAPIView):
    serializer_class = RegionSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Region.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()

## Vista de DEPARTAMENTO
class DepartamentoListCreate(generics.ListCreateAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Departamento.objects.all()
    
    def perform_create(self, serializer):
        serializer.save()

class DepartamentoPorRegion(generics.ListAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        query_set = Departamento.objects.all()
        id_region = self.request.query_params.get('id_region')
        if id_region is not None:
            query_set = query_set.filter(id_region=id_region)
        return query_set
        

class DepartamentoDelete(generics.DestroyAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Departamento.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class DepartamentoUpdate(generics.UpdateAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Departamento.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()


## Vista de MUNICIPIO
class MunicipioListCreate(generics.ListCreateAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Municipio.objects.all()
    
    def perform_create(self, serializer):
        serializer.save()

class MunicipioDelete(generics.DestroyAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Municipio.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class MunicipioUpdate(generics.UpdateAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Municipio.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()

class MunicipioPorDepartamento(generics.ListAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        id_departamento = self.kwargs.get("id_departamento")
        return Municipio.objects.filter(id_departamento=id_departamento)

## Vista de VIVIENDA
class ViviendaListCreate(generics.ListCreateAPIView):
    serializer_class = ViviendaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Vivienda.objects.all()
    
    def perform_create(self, serializer):
        serializer.save()

class ViviendaDelete(generics.DestroyAPIView):
    serializer_class = ViviendaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Vivienda.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class ViviendaUpdate(generics.UpdateAPIView):
    serializer_class = ViviendaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Vivienda.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()

class ViviendaPorMunicipio(generics.ListAPIView):
    serializer_class = ViviendaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        id_municipio = self.kwargs.get("id_municipio")
        return Vivienda.objects.filter(id_municipio=id_municipio)
    
class ViviendaPorPersona(generics.ListAPIView):
    serializer_class = ViviendaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        id_persona = self.kwargs.get("id_persona")
        return Vivienda.objects.filter(id_persona=id_persona)
    
class ViviendaMunicipioDepartamento(generics.ListAPIView):
    serializer_class = ViviendaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Vivienda.objects.select_related('id_municipio__id_departamento').all()


## Vista de MASCOTA
class MascotaListCreate(generics.ListCreateAPIView):
    serializer_class = MascotaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Mascota.objects.all()
    
    def perform_create(self, serializer):
        serializer.save()

class MascotaDelete(generics.DestroyAPIView):
    serializer_class = MascotaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Mascota.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class MascotaUpdate(generics.UpdateAPIView):
    serializer_class = MascotaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return Mascota.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()

class MascotaPorVivienda(generics.ListAPIView):
    serializer_class = MascotaSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        id_vivienda = self.kwargs.get("id_vivienda")
        return Mascota.objects.filter(id_vivienda=id_vivienda)

## Vista de PERSONA RESIDE VIVIENDA
class PersonaResideViviendaListCreate(generics.ListCreateAPIView):
    serializer_class = PersonaResideViviendaSerializer
    permission_classes = [AllowAny]

    # def get_queryset(self):
    #     return PersonaResideVivienda.objects.all()
    
    def perform_create(self, serializer):
        persona = serializer.validated_data["id_persona"]
        vivienda = serializer.validated_data["id_vivienda"]

        # Validar existencia en base de datos (opcional si ya lo haces en el serializador)
        if not Persona.objects.filter(id=persona.id).exists():
            raise ValidationError("La persona no existe.")
        if not Vivienda.objects.filter(id=vivienda.id).exists():
            raise ValidationError("La vivienda no existe.")
        
        serializer.save()

class PersonaResideViviendaDelete(generics.DestroyAPIView):
    serializer_class = PersonaResideViviendaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return PersonaResideVivienda.objects.all()
    
    def perform_destroy(self, instance):
        instance.delete()

class PersonaResideViviendaUpdate(generics.UpdateAPIView):
    serializer_class = PersonaResideViviendaSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        return PersonaResideVivienda.objects.all()
    
    def perform_update(self, serializer):
        serializer.save()


## Vista de PERSONA POSEE VIVIENDA
# class PersonaPoseeViviendaListCreate(generics.ListCreateAPIView):
#     serializer_class = PersonaPoseeViviendaSerializer
#     permission_classes = [AllowAny]

#     def get_queryset(self):
#         return PersonaPoseeVivienda.objects.all()
    
#     def perform_create(self, serializer):
#         serializer.save()

# class PersonaPoseeViviendaDelete(generics.DestroyAPIView):
#     serializer_class = PersonaPoseeViviendaSerializer
#     permission_classes = [AllowAny]
#     def get_queryset(self):
#         return PersonaPoseeVivienda.objects.all()
    
#     def perform_destroy(self, instance):
#         instance.delete()

# class PersonaPoseeViviendaUpdate(generics.UpdateAPIView):
#     serializer_class = PersonaPoseeViviendaSerializer
#     permission_classes = [AllowAny]
#     def get_queryset(self):
#         return PersonaPoseeVivienda.objects.all()
    
#     def perform_update(self, serializer):
#         serializer.save()




## Crear USUARIO
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


