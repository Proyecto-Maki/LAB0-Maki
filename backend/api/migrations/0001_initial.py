# Generated by Django 5.1.4 on 2024-12-13 23:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id_persona', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('nombre_1_persona', models.CharField(max_length=50)),
                ('nombre_2_persona', models.CharField(blank=True, max_length=50, null=True)),
                ('apellido_1_persona', models.CharField(max_length=50)),
                ('apellido_2_persona', models.CharField(blank=True, max_length=50, null=True)),
                ('fecha_nacimiento', models.DateField()),
                ('genero_persona', models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], max_length=1)),
                ('telefono_persona', models.CharField(blank=True, max_length=10, null=True)),
                ('correo_persona', models.EmailField(blank=True, max_length=254, null=True)),
                ('id_cabeza_familia', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='miembros_familia', to='api.persona')),
            ],
        ),
    ]
