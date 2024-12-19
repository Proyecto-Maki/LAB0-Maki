import React, { useState } from 'react';
import '../../styles/Mascota/Mascota.css';
import { FaPaw } from 'react-icons/fa';
import MascotaFormEdit from './MascotaFormEdit';

function Mascota({ mascota, get_mascotas, get_viviendas, deleteMascota }) {
    const [isEditarOpen, setIsEditarOpen] = useState(false);

    const abrirEditar = () => {
        setIsEditarOpen(true);
    };

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_mascotas();
    };

    return (
        <div className="mascota-container">
            <div className='mascota-icon'>
                <FaPaw />
            </div>
            <div className='mascota-info'>
                <p className='mascota-id'>ID: {mascota.id_mascota}</p>
                <p className='mascota-label'>Nombre: {mascota.nombre_mascota}</p>
                <p className='mascota-label'>Especie: {mascota.especie_mascota}</p>
                <p className='mascota-label'>Raza: {mascota.raza_mascota}</p>
                <p className='mascota-label'>Sexo: {mascota.sexo_mascota === 'M' ? 'Macho' : mascota.sexo_mascota === 'H' ? 'Hembra' : 'Desconocido'}</p>
                <p className='mascota-label'>Vivienda: {mascota.id_vivienda}</p>
            </div>
            <div className="mascota-buttons">
                <button className="mascota-container-button-ed" onClick={abrirEditar}>Editar</button>
                <button className="mascota-container-button-el" onClick={() => deleteMascota(mascota.id_mascota)}>Eliminar</button>
            </div>
            {isEditarOpen && (
                <div className="modal-editar-mascota">
                    <div className="modal-editar-mascota-content">
                        <span className="close" onClick={cerrarEditar}>&times;</span>
                        <MascotaFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            mascota={mascota}
                            get_mascotas={get_mascotas}
                            viviendas={get_viviendas}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mascota;