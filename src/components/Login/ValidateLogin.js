export default function ValidateLogin(values) {
    let errors = {};

  
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is Required';
    } 
    else if (values.password.length < 8) {
      errors.password = 'Password is invalid';
    }
  
    return errors;
  }