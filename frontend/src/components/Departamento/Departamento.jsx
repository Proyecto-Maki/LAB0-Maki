import React, { useState } from 'react';
import '../../styles/Departamento/Departamento.css';
import DepartamentoFormEdit from './DepartamentoFormEdit';

function Departamento({ departamento, get_departamentos, deleteDepartamento, get_regiones, get_personas }) {
    const [isEditarOpen, setIsEditarOpen] = useState(false);

    const abrirEditar = () => {
        setIsEditarOpen(true);
    };

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_departamentos();
    };

    const gobernador = get_personas.find(persona => persona.id_persona === departamento.id_gobernador);

    return (
        <div className="departamento-container">
            <div className='departamento-info'>
                <p className='departamento-id'>ID: {departamento.id_departamento}</p>
                <p className='departamento-label'>Nombre: {departamento.nombre_departamento}</p>
                <p className='departamento-label'>Gobernador: {gobernador ? `${gobernador.nombre_1_persona} ${gobernador.apellido_1_persona}` : 'No asignado'}</p>
            </div>
            <div className="departamento-buttons">
                <button className="departamento-container-button-ed" onClick={abrirEditar}>Editar</button>
                <button className="departamento-container-button-el" onClick={() => deleteDepartamento(departamento.id_departamento)}>Eliminar</button>
            </div>
            {isEditarOpen && (
                <div className="modal-editar-departamento">
                    <div className="modal-editar-departamento-content">
                        <span className="close" onClick={cerrarEditar}>&times;</span>
                        <DepartamentoFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            departamento={departamento}
                            get_departamentos={get_departamentos}
                            get_regiones={get_regiones} // Ensure get_regiones is passed correctly
                            get_personas={get_personas} // Pass get_personas to DepartamentoFormEdit
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Departamento;