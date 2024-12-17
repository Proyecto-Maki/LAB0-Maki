import React from 'react';
import { useState, useEffect } from "react";
import '../../styles/Departamento.css';
import DepartamentoFormEdit from './DepartamentoFormEdit';


function Departamento ({departamento, deleteDepartamento, get_departamentos}){
    const [isEditarOpen, setIsEditarOpen] = useState(false);
    const abrirEditar = () => {
        setIsEditarOpen(true);
    };
    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_departamentos();
    };
    return (
        <div className="departamento-container">
            <div className='departamento-info'>
                <p className='departamento-id'>Id: {departamento.id_departamento}</p>
                <p className='departamento-label'>Nombre: {departamento.nombre_departamento}</p>
            </div>
            <button className= "departamento-container-button-ed" onClick={abrirEditar}>Editar</button>
            <button className= "departamento-container-button-el" onClick={() => deleteDepartamento(departamento.id_departamento)}>Eliminar</button>

            {
                isEditarOpen && (
                    <div>
                        <DepartamentoFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            departamento={departamento}
                            get_departamentos={get_departamentos}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default Departamento;