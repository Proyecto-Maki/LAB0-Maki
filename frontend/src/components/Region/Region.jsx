import React, { useState } from 'react';
import '../../styles/Region/Region.css';
import RegionFormEdit from './RegionFormEdit';

function Region({ region, get_regiones, deleteRegion }) {
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
            <div className='region-info'>
                <p className='region-id'>ID: {region.id_region}</p>
                <p className='region-label'>Nombre: {region.nombre_region}</p>
                {/* Remove the description display */}
            </div>
            <div className="region-buttons">
                <button className="region-container-button-ed" onClick={abrirEditar}>Editar</button>
                <button className="region-container-button-el" onClick={() => deleteRegion(region.id_region)}>Eliminar</button>
            </div>
            {isEditarOpen && (
                <div className="modal-editar-region">
                    <div className="modal-editar-region-content">
                        <RegionFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            region={region}
                            get_regiones={get_regiones}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Region;