# Generated by Django 5.1.4 on 2024-12-16 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_departamento_id_gobernador_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='mascota',
            name='sexo_mascota',
            field=models.CharField(choices=[('M', 'Macho'), ('H', 'Hembra')], default='M', max_length=1),
            preserve_default=False,
        ),
    ]
