import { useState } from 'react'
import './loginForm.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const LoginForm = () => {
    const [user, setUser] = useState({
      email: '',
      password: ''
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleSubmitClick = async(e) => {
        e.preventDefault();
        setLoading(true)
          try {
          const response = await axios.post('https://institutoweb-hospital-backend.onrender.com/api/users/login', user)
          setLoading(false)
          console.log(response.data)
        } catch (error) {
          setError(error.response.data.payload.message)
          setLoading(false)
        } finally {
          setUser({
            email: '',
            password: ''
          })
        }

      };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser({...user, [name]: value });
    }

  return (
    <div className='login_container'>
          <h1 className="login_form_title">{loading ? 'Ingresando...' : 'Tu cuenta'}</h1>
        <form className='login_form' onSubmit={handleSubmitClick}>
            {
              loading ? <FontAwesomeIcon icon={faSpinner} spin size='2xl'className='login_form_spinner' /> :
              <>
          <div className='login_form_inputs_container'>
                <div className='login_form_inputLabel_container'>
                  <label>Usuario</label>
                  <input required type="email" name='email' className='login_form_input'  onChange={handleInputChange}/>
                </div>
                <div className='login_form_inputLabel_container'>
                  <label>Contraseña</label>
                  <input required minLength={8} type="password" name='password' className='login_form_input'  onChange={handleInputChange}/>
                </div>  
          </div>
            {error && <span className='login_form_error' >{error}</span>}
            <button className="login_form_submitBtn">Iniciar sesión</button>
          <div>
            <Link to='/sign-up'>¿No estás registrado? <span className='underline hover:scale-110 duration-150'>Regístrate</span></Link>
          </div>
              </>
          }
        </form>
    </div>
  )
}

export default LoginForm