from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Persona(models.Model):
    id_persona = models.CharField(max_length=10, primary_key=True)
    nombre_1_persona = models.CharField(max_length=50)
    nombre_2_persona = models.CharField(max_length=50, blank=True, null=True)
    apellido_1_persona = models.CharField(max_length=50)
    apellido_2_persona = models.CharField(max_length=50, blank=True, null=True)
    fecha_nacimiento = models.DateField()
    genero_persona = models.CharField(max_length=1, choices=[('M', 'Masculino'), ('F', 'Femenino')])
    telefono_persona = models.CharField(max_length=10, blank=True, null=True)
    correo_persona = models.EmailField(blank=True, null=True)
    id_cabeza_familia = models.ForeignKey(
        'self', on_delete=models.SET_NULL, blank=True, null=True, related_name='miembros_familia')
    def __str__(self):
        return f"{self.id_persona} {self.nombre_1_persona} {self.apellido_1_persona}"
class Region(models.Model):
    id_region = models.AutoField(primary_key=True)
    nombre_region = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_region
    
class Departamento(models.Model):
    id_departamento = models.AutoField(primary_key=True)
    nombre_departamento = models.CharField(max_length=50)
    id_region = models.ForeignKey(Region, on_delete=models.CASCADE)
    id_gobernador = models.ForeignKey(Persona, on_delete=models.CASCADE)


    def __str__(self):
        return self.nombre_departamento
    



    

    
