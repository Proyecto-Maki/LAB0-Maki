import React, { useState } from 'react';
import '../../styles/Municipio/Municipio.css';
import MunicipioFormEdit from './MunicipioFormEdit';

function Municipio({ municipio, get_municipios, deleteMunicipio, get_departamentos, get_personas }) {
    const [isEditarOpen, setIsEditarOpen] = useState(false);

    const abrirEditar = () => {
        setIsEditarOpen(true);
    };

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_municipios();
    };

    const alcalde = get_personas.find(persona => persona.id_persona === municipio.id_alcalde);

    return (
        <div className="municipio-container">
            <div className='municipio-info'>
                <p className='municipio-id'>ID: {municipio.id_municipio}</p>
                <p className='municipio-label'>Nombre: {municipio.nombre_municipio}</p>
                <p className='municipio-label'>Alcalde: {alcalde ? `${alcalde.nombre_1_persona} ${alcalde.apellido_1_persona}` : 'No asignado'}</p>
            </div>
            <div className="municipio-buttons">
                <button className="municipio-container-button-ed" onClick={abrirEditar}>Editar</button>
                <button className="municipio-container-button-el" onClick={() => deleteMunicipio(municipio.id_municipio)}>Eliminar</button>
            </div>
            {isEditarOpen && (
                <div className="modal-editar-municipio">
                    <div className="modal-editar-municipio-content">
                        <span className="close" onClick={cerrarEditar}>&times;</span>
                        <MunicipioFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            municipio={municipio}
                            get_municipios={get_municipios}
                            get_departamentos={get_departamentos} // Ensure get_departamentos is passed correctly
                            get_personas={get_personas} // Pass get_personas to MunicipioFormEdit
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Municipio;