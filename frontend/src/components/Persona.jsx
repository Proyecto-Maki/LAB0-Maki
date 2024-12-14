import React from 'react';

function Persona({ persona, deletePersona }) {
    const formattedDate = new Date(persona.fecha_nacimiento).toLocaleDateString("es-ES");

    return (
        <div className="persona-container">
            <p className='persona-id'>{persona.id_persona}</p>
            <p className='persona-label'>{persona.nombre_1_persona}</p>
            <p className='persona-label'>{persona.nombre_2_persona}</p>
            <p className='persona-label'>{persona.apellido_1_persona}</p>
            <p className='persona-label'>{persona.apellido_2_persona}</p>
            <p className='persona-label'>{formattedDate}</p>
            <p className='persona-label'>{persona.genero_persona}</p>
            <p className='persona-label'>{persona.telefono_persona}</p>
            <p className='persona-label'>{persona.correo_persona}</p>
            <p className='persona-label'>{persona.id_cabeza_familia}</p>

            <button onClick={() => deletePersona(persona.id_persona)}>Eliminar</button>
        </div>
    );
}

export default Persona;