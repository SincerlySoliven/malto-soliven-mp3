import React, { useState } from 'react';
import './LoginForm.css';
import Login from './Login';
import Submit from './Submit';

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='/login'>
        <div className='form-containers'>
            {!isSubmitted ? (
            <Login submitForm={submitForm} />
            ) : (
            <Submit />
            )}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
