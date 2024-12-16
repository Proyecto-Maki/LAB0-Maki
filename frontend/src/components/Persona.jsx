import React from 'react';
import { useState, useEffect } from "react";
import '../styles/Persona.css';
import { FaMale, FaFemale, FaGenderless, FaUserCircle } from 'react-icons/fa';
import PersonaFormEdit from './PersonaFormEdit';

function Persona({ persona, get_personas, mayoresEdad, deletePersona }) {
    const formattedDate = new Date(persona.fecha_nacimiento).toLocaleDateString("es-ES");

    // const getGenderIcon = (gender) => {
    //     switch (gender) {
    //         case 'M':
    //             return <FaMale />;
    //         case 'F':
    //             return <GrUserFemale />;
    //         default:
    //             return <FaGenderless />;
    //     }
    // };

    const [isEditarOpen, setIsEditarOpen] = useState(false);
    const abrirEditar = () => {
        setIsEditarOpen(true);
    };

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_personas();
    };


    return (
        <div className="persona-container">
            <div className='persona-icon'>
                <FaUserCircle/>
            </div>
            <div className='persona-info'>
                <p className='persona-id'>Documento: {persona.id_persona}</p>
                <p className='persona-label'>Nombres: {persona.nombre_1_persona} {persona.nombre_2_persona}</p>
                
                <p className='persona-label'>Apellidos: {persona.apellido_1_persona} {persona.apellido_2_persona}</p>
                {/* <p className='persona-label'>{formattedDate}</p> */}
                {/* <p className='persona-label'>{persona.genero_persona}</p> */}
                <p className='persona-label'> Teléfono: {persona.telefono_persona}</p>
                <p className='persona-label'>Correo eletrónico: {persona.correo_persona}</p>
                {/* <p className='persona-label'>{persona.id_cabeza_familia}</p> */}
                <button className= "persona-container-button-ed" onClick={abrirEditar}>Editar</button>
                <button className= "persona-container-button-el" onClick={() => deletePersona(persona.id_persona)}>Eliminar</button>
            </div>
            

            {
                isEditarOpen && (
                    <div>
                        <PersonaFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            persona={persona}
                            get_personas={get_personas}
                            mayoresEdad={mayoresEdad}
                        />
                        <button onClick={cerrarEditar}>Cerrar</button>
                    </div>
                )
            }
        </div>
    );
}

export default Persona;