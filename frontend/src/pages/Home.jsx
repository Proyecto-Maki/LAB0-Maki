import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EDRFINAL from '../img/EDRFINAL.png'; // Asegúrate de que la ruta sea correcta

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1', display: 'flex', padding: '20px' }}>
        <div style={{ flex: '1', paddingRight: '10px', textAlign: 'justify' }}>
          <h2>Objetivos</h2>
          <h3>Objetivo general</h3>
          <p>
            Orientar a los miembros del equipo en el diseño, construcción e implementación de una base de datos, siguiendo un modelo de ejemplo de Municipios, Viviendas y Personas, con el fin de conectarla a una aplicación web, que pueda ser accedida y operada por los usuarios.
          </p>
          <h3>Objetivos específicos</h3>
          <ul>
            <li>
              Diseñar una base de datos a partir de la identificación de sus entidades e interrelaciones, un esquema de Entidad-Relación, definiendo sus cardinalidades y analizando las redundancias a eliminar.
            </li>
            <li>
              Implementar el diseño de base de datos usando herramientas de gestores de base de datos, en las cuales se estructuren las tablas, columnas, relaciones, asignación de llaves y restricciones. Estas herramientas se conectarán con el Frontend y el Backend de la aplicación a desarrollar, con el fin de que los usuarios puedan realizar operaciones CRUD (Create, Read, Update, Delete) con la base de datos.
            </li>
            <li>
              Testear las operaciones CRUD (Create, Read, Update, Delete) de la aplicación desarrollada para comprobar el correcto comportamiento de la aplicación.
            </li>
            <li>
              Desplegar la aplicación en un entorno de producción accesible a los usuarios que deseen interactuar.
            </li>
          </ul>
        </div>
        <div style={{ flex: '1', paddingLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={EDRFINAL} alt="Diagrama Entidad-Relacion Laboratorio 0" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;