import React from 'react'
import validate from './ValidateLogin';
import useForm from './UseLogin';
import { Link } from 'react-router-dom';
import './LoginForm.css';


const Login = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate,
    );
  
    return (
      <div className='form-containers'>
        <form onSubmit={handleSubmit} className='form' noValidate>

          <div className='form-inputs'>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className='form-inputs'>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

         

          <button className='form-input-btn' type='submit'>
            Login
          </button>

          <span className='form-input-forgot'>
            <Link to='/password' >Forgot password?</Link>
          </span>
        </form>
      </div>
    );
  };

export default Login;