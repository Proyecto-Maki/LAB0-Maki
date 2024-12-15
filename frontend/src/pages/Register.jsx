import Form from '../components/Form'
import { useNavigate } from 'react-router-dom';

function Register () {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }


    return (
        <div className='container'>
            <div className='container-title'>
                <div className='container-title-til'>¡Bienvenido!</div>
                <div className='container-title-sub-1'>Regístrate para continuar</div>
                <div className='container-title-sub-2'>¿Ya tienes cuenta?</div>
                <button className='container-title-button' onClick={login}>Inicia sesión</button>
            </div>
            <div className='container-form'>
                <Form route="/api/user/register/" method="register"/>
            </div>
        </div>
        
    );
}

export default Register;
