import Form from '../components/Form'
import '../styles/Base.css'
import { useNavigate } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Login () {

    const navigate = useNavigate();

    const register = () => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div className='container-title'>
                <div className='container-title-til'>¡Bienvenido!</div>
                <div className='container-title-sub-1'>Inicia sesión para continuar</div>
                <div className='container-title-sub-2'>¿No tienes cuenta?</div>
                <button className='container-title-button' onClick={register}>Regístrate</button>
            </div>
            <div className='container-form'>
                <Form route="/api/token/" method="login"/>
            </div>
            
        </div>
        
    );
}

export default Login
