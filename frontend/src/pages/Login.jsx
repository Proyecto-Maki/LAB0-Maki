import Form from '../components/Form'
import '../styles/Base.css'

function Login () {
    return (
        <div className='container'>
            <div className='container-title'>
                <h1>Login</h1>
            </div>
            <div className='container-form'>
                <Form route="/api/token/" method="login"/>
            </div>
            
        </div>
        
    );
}

export default Login
