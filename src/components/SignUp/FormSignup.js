import React from 'react'
import validate from './Validate';
import useForm from './UseForm';
import { Link } from 'react-router-dom';
import './Form.css';


const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate,
    );
  
    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Create Your Own Account
          </h1>

          <div className='form-inputs'>
            <label className='form-label'>First Name</label>
            <input
              className='form-input'
              type='text'
              name='firstname'
              placeholder='Enter your first name'
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Last Name</label>
            <input
              className='form-input'
              type='text'
              name='lastname'
              placeholder='Enter your last name'
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>

          <button className='form-input-btn' type='submit'>
            Sign up
          </button>

          <span className='form-input-login'>
            Already have an account? Login <Link to='/login' >here</Link>
          </span>
        </form>
      </div>
    );
  };

export default FormSignup