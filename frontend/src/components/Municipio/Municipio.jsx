import React from 'react';
import { useState, useEffect } from "react";
import '../../styles/Municipio/Municipio.css';
import MunicipioFormEdit from './MunicipioFormEdit';

function Municipio({municipio, deleteMunicipio, get_municipios}){
    const [isEditarOpen, setIsEditarOpen] = useState(false);
    const abrirEditar = () => {
        setIsEditarOpen(true);
    }

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_municipios(false);
    }

    return(
        <div className="municipio-container">
            <div className='municipio-info'>
                <p className='municipio-id'>Id: {municipio.id_municipio}</p>
                <p className='municipio-label'>Nombre: {municipio.nombre_municipio}</p>
            </div>
            <button className= "municipio-container-button-ed" onClick={abrirEditar}>Editar</button>
            <button className= "municipio-container-button-el" onClick={() => deleteMunicipio(municipio.id_municipio)}>Eliminar</button>

            {
                isEditarOpen && (
                    <div>
                        <MunicipioFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            municipio={municipio}
                            get_municipios={get_municipios}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default Municipio;