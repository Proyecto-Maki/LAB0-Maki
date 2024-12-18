import React from 'react';
import { useState, useEffect } from "react";
import '../../styles/Mascota/Mascota.css';
import MascotaFormEdit from './MascotaFormEdit';

function Mascota ({mascota, get_mascotas, get_viviendas, deleteMascota}){
    const [isEditarOpen, setIsEditarOpen] = useState(false);

    const abrirEditar = () => {
        setIsEditarOpen(true);
    };

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_mascotas();
    };

    return(
        <div className="mascota-container">
            <div className='mascota-info'>
                <p className='mascota-id'>ID: {mascota.id_mascota}</p>
                <p className='mascota-label'>Nombre: {mascota.nombre_mascota}</p>
                <p className='mascota-label'>Especie: {mascota.especie_mascota}</p>
                <p className='mascota-label'>Raza: {mascota.raza_mascota}</p>
                <p className='mascota-label'>Sexo: {mascota.sexo_mascota}</p>
                <p className='mascota-label'>Vivienda: {mascota.id_vivienda}</p>
            </div>
            <button className= "mascota-container-button-ed" onClick={abrirEditar}>Editar</button>
            <button className= "mascota-container-button-el" onClick={() => deleteMascota(mascota.id_mascota)}>Eliminar</button>

            {
                isEditarOpen && (
                    <div className="modal-editar-mascota">
                        <div className="modal-editar-mascota-content">
                            <MascotaFormEdit
                                isEditarOpen={isEditarOpen}
                                cerrarEditar={cerrarEditar}
                                mascota={mascota}
                                get_mascotas={get_mascotas}
                                get_viviendas={get_viviendas}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Mascota;