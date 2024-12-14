from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Persona

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


