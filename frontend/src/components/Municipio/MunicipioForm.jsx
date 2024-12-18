import { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import '../../styles/Municipio/MunicipioForm.css';

function MunicipioForm({get_municipios, get_departamentos}){
    const [nombre_municipio, set_nombre_municipio] = useState("");
    const [id_departamento, set_id_departamento] = useState("");
    const navigate = useNavigate();


    const create_municipio = async (e) => {
        e.preventDefault();

        const nuevo_municipio = {
            nombre_municipio : nombre_municipio,
            id_departamento : id_departamento,
        }

        console.log(nuevo_municipio);

        api
            .post("/api/departamentos/", nuevo_departamento)
                .then((res) => {
                    if (res.status === 201) {
                        alert("Departamento creado");
                    } else {
                        alert("Error al crear el departamento");
                    }
                    get_departamentos();
                    set_nombre_municipio("");
                    set_id_departamento("");
                })
                .catch((err) => {
                    console.log(err.response.data);
                    alert("Error al crear el municipio");
                });
    }

    return(
        <form onSubmit={create_municipio} className='form-container-municipio'>
            <h2 className='form-container-h2'>Crear un municipio</h2>
            <div className='form-container-agr'>
                <label htmlFor="nombre_municipio">Nombre municipio</label>
                <input type="text" id="nombre_municipio" value={nombre_municipio} onChange={(e) => set_nombre_municipio(e.target.value)} required />
            </div>
            
            <div className='form-container-agr'>
                <label htmlFor="id_departamento">ID Departamento</label>
                <select id="id_departamento" value={id_departamento} onChange={(e) => set_id_departamento(e.target.value)}>
                    <option value="">Seleccione el departamento</option>
                    { get_departamentos.map((departamento) => (
                        <option key={departamento.id_departamento} value={departamento.id_departamento}>
                            {departamento.id_departamento} {departamento.nombre_departamento}
                        </option>
                    ))}
                </select>
            </div>
            
            <button className='form-container-p-botton' type="submit">Crear municipio</button>
        </form>
    );
}

export default MunicipioForm;