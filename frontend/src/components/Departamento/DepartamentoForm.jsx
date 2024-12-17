import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import '../../styles/DepartamentoForm.css';

function DepartamentoForm({get_departamentos, get_regiones}) {
    const [nombre_departamento, set_nombre_departamento] = useState("");
    const [id_region, set_id_region] = useState("");
    const navigate = useNavigate();
    
    const create_departamento = async (e) => {
        e.preventDefault();
        const nuevo_departamento = {
            nombre_departamento : nombre_departamento,
            id_region : id_region,
        };

        console.log(nuevo_departamento);

        api
            .post("/api/departamentos/", nuevo_departamento)
            .then((res) => {
                if (res.status === 201) {
                    alert("Departamento creado");
                } else {
                    alert("Error al crear el departamento");
                }
                get_departamentos();
                set_nombre_departamento("");
                set_id_region("");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear el departamento");
            });
    }

    return (
        <form onSubmit={create_departamento} className='form-container-departamento'>
            <h2 className='form-container-h2'>Crear un departamento</h2>
            <div className='form-container-agr'>
                <label htmlFor="nombre_departamento">Nombre departamento</label>
                <input type="text" id="nombre_departamento" value={nombre_departamento} onChange={(e) => set_nombre_departamento(e.target.value)} required />
            </div>
            
            <div className='form-container-agr'>
                <label htmlFor="id_region">ID Región</label>
                <select id="id_region" value={id_region} onChange={(e) => set_id_region(e.target.value)}>
                    <option value="">Seleccione la región</option>
                    { get_regiones.map((region) => (
                        <option key={region.id_region} value={region.id_region}>
                            {region.id_region} {region.nombre_region}
                        </option>
                    ))}
                </select>
            </div>
            
            <button className='form-container-p-botton' type="submit">Crear departamento</button>
        </form>
    );
   
}

export default DepartamentoForm;