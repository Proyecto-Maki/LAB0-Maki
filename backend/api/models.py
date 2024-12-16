from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Persona(models.Model):
    id_persona = models.CharField(max_length=10, primary_key=True, null=False)
    nombre_1_persona = models.CharField(max_length=50, null=False)
    nombre_2_persona = models.CharField(max_length=50, blank=True, null=True)
    apellido_1_persona = models.CharField(max_length=50, null=False)    
    apellido_2_persona = models.CharField(max_length=50, blank=True, null=True)
    fecha_nacimiento = models.DateField(null=False)
    genero_persona = models.CharField(max_length=1, choices=[('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')], null=False)
    telefono_persona = models.CharField(max_length=10, blank=True, null=True)
    correo_persona = models.EmailField(blank=True, null=True)
    id_cabeza_familia = models.ForeignKey(
        'self', on_delete=models.SET_NULL, blank=True, null=True, related_name='miembros_familia')
    def __str__(self):
        return f"{self.id_persona} {self.nombre_1_persona} {self.apellido_1_persona}"
class Region(models.Model):
    id_region = models.AutoField(primary_key=True)
    nombre_region = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.nombre_region
    
class Departamento(models.Model):
    id_departamento = models.AutoField(primary_key=True)
    nombre_departamento = models.CharField(max_length=50, null=False)
    id_region = models.ForeignKey(Region, on_delete=models.CASCADE, null=False)
    id_gobernador = models.ForeignKey(Persona, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.nombre_departamento
    

class Municipio(models.Model):
    id_municipio = models.AutoField(primary_key=True)
    nombre_municipio = models.CharField(max_length=50, null=False)
    id_departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE, null=False)
    id_alcalde = models.ForeignKey(Persona, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.nombre_municipio


class Vivienda(models.Model):
    id_vivienda = models.AutoField(primary_key=True)
    direccion_vivienda = models.CharField(max_length=100, null=False)
    estrato_vivienda = models.IntegerField(null=False)
    id_municipio = models.ForeignKey(Municipio, on_delete=models.CASCADE, null=False)
    id_persona = models.ForeignKey(Persona, on_delete=models.CASCADE, null=False)   

    def __str__(self):
        return self.direccion_vivienda


class Mascota(models.Model):
    id_mascota = models.AutoField(primary_key=True)
    nombre_mascota = models.CharField(max_length=50, null=False)
    especie_mascota = models.CharField(max_length=50, null=False)
    raza_mascota = models.CharField(max_length=50, null=False)
    sexo_mascota = models.CharField(max_length=1, choices=[('M', 'Macho'), ('H', 'Hembra')], null=False)
    id_vivienda = models.ForeignKey(Vivienda, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.nombre_mascota
    
class PersonaResideVivienda(models.Model):
    id_persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    id_vivienda = models.ForeignKey(Vivienda, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.id_persona} {self.id_vivienda}"
    

    

    
