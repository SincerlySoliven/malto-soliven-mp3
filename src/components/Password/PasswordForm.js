import React, { useState } from 'react';
import './PasswordForm.css';
import Password from './Password';
import PasswordSubmit from './PasswordSubmit';

const PasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-containers2'>
        <div className='password'>
            {!isSubmitted ? (
            <Password submitForm={submitForm} />
            ) : (
            <PasswordSubmit />
            )}
        </div>
      </div>
    </>
  );
};

export default PasswordForm;