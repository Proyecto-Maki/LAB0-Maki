from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Persona, Region, Departamento, Municipio, Vivienda, Mascota

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class PersonaSerializer(serializers.ModelSerializer):
    id_cabeza_familia = serializers.PrimaryKeyRelatedField(
        queryset=Persona.objects.all(),
        required=False,
        allow_null=True
    )
    class Meta:
        model = Persona
        fields = ["id_persona", "nombre_1_persona", "nombre_2_persona", "apellido_1_persona", "apellido_2_persona", "fecha_nacimiento", "genero_persona", "telefono_persona", "correo_persona", "id_cabeza_familia"]
        # extra_kwargs = {"id_persona": {"read_only": True}}

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ["id_region", "nombre_region"]

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = ["id_departamento", "nombre_departamento", "id_region", "id_gobernador"]

class MunicipioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = ["id_municipio", "nombre_municipio", "id_departamento", "id_alcalde"]


class ViviendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vivienda
        fields = ["id_vivienda", "direccion_vivienda", "estrato_vivienda", "id_municipio"]


class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = ["id_mascota", "nombre_mascota", "especie_mascota", "raza_mascota", "id_vivienda"]

class PersonaResideViviendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ["id_persona", "id_vivienda"]

class PersonaPoseeViviendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vivienda
        fields = ["id_vivienda", "id_persona"]
    
