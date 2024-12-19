import { useState } from 'react';
import api from '../../api';
import '../../styles/Region/RegionForm.css';

function RegionForm({ get_regiones }) {
    const [nombre_region, set_nombre_region] = useState("");

    const create_region = async (e) => {
        e.preventDefault();
        const nueva_region = {
            nombre_region,
        };
        console.log(nueva_region);

        api
            .post("/api/regiones/", nueva_region)
            .then((res) => {
                if (res.status === 201) {
                    alert("Región creada");
                } else {
                    alert("Error al crear la región");
                }
                get_regiones();
                set_nombre_region("");
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Error al crear la región");
            });
    }

    return (
        <form onSubmit={create_region} className='form-container-region'>
            <h2 className='form-container-h2'>Crear una Región</h2>
            <div className='form-container-agr'>
                <label htmlFor="nombre_region">Nombre</label>
                <input type="text" id="nombre_region" value={nombre_region} onChange={(e) => set_nombre_region(e.target.value)} required />
            </div>
            <button className='form-container-r-button' type="submit">Crear región</button>
        </form>
    );
}

export default RegionForm;