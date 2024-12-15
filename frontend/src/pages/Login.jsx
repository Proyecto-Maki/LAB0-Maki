import Form from '../components/Form'
import '../styles/Base.css'
//import 'bootstrap/dist/css/bootstrap.min.css';

function Login () {
    return (
        <div className='container'>
            <div className='container-title'>
                <div className='container-title-til'>¡Bienvenido!</div>
            </div>
            <div className='container-form'>
                <Form route="/api/token/" method="login"/>
            </div>
            
        </div>
        
    );
}

export default Login
