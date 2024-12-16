import React from 'react';
import { useState, useEffect } from "react";
import {FaMapMarkedAlt} from 'react-icons/fa';


function Region({region, deleteRegion}){
    const [isEditarOpen, setIsEditarOpen] = useState(false);
    const abrirEditar = () => {
        setIsEditarOpen(true);
    };
    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_regiones();
    };
    return (
        <div className="region-container">
            <div className='region-icon'>
                <FaMapMarkedAlt />
            </div>
            <div className='region-info'>
                <p className='region-id'>Id: {region.id_region}</p>
                <p className='region-label'>Nombre: {region.nombre_region}</p>
            </div>
            <button className= "region-container-button-ed" onClick={abrirEditar}>Editar</button>
            <button className= "region-container-button-el" onClick={() => deleteRegion(region.id_region)}>Eliminar</button>
        </div>
    );
}