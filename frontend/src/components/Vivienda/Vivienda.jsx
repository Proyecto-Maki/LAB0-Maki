import React, { useState } from 'react';
import '../../styles/Vivienda/Vivienda.css';
import { FaHome } from 'react-icons/fa';
import ViviendaFormEdit from './ViviendaFormEdit';

function Vivienda({ vivienda, get_viviendas, get_personas, get_municipios, deleteVivienda }) {
    const [isEditarOpen, setIsEditarOpen] = useState(false);

    const abrirEditar = () => {
        setIsEditarOpen(true);
    };

    const cerrarEditar = () => {
        setIsEditarOpen(false);
        get_viviendas();
    };

    return (
        <div className="vivienda-container">
            <div className='vivienda-icon'>
                <FaHome />
            </div>
            <div className='vivienda-info'>
                <p className='vivienda-id'>ID: {vivienda.id_vivienda}</p>
                <p className='vivienda-label'>Dirección: {vivienda.direccion_vivienda}</p>
                <p className='vivienda-label'>Estrato: {vivienda.estrato_vivienda}</p>
                <p className='vivienda-label'>Municipio: {vivienda.id_municipio}</p>
                <p className='vivienda-label'>Propietario(a): {vivienda.id_persona}</p>
            </div>
            <div className="vivienda-buttons">
                <button className="vivienda-container-button-ed" onClick={abrirEditar}>Editar</button>
                <button className="vivienda-container-button-el" onClick={() => deleteVivienda(vivienda.id_vivienda)}>Eliminar</button>
            </div>
            {isEditarOpen && (
                <div className="modal-editar-vivienda">
                    <div className="modal-editar-vivienda-content">
                        <span className="close" onClick={cerrarEditar}>&times;</span>
                        <ViviendaFormEdit
                            isEditarOpen={isEditarOpen}
                            cerrarEditar={cerrarEditar}
                            vivienda={vivienda}
                            get_viviendas={get_viviendas}
                            get_personas={get_personas}
                            get_municipios={get_municipios}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vivienda;