import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Form from './components/SignUp/Form';
import LoginForm from './components/Login/LoginForm';
import PasswordForm from './components/Password/PasswordForm';
import './App.css';

function App() {
  return (
    <>
        <Router>
          <Routes> 
            <Route exact path='/' element ={<Form/>} />
            <Route exact path='/login' element ={<LoginForm/>} />
            <Route exact path='/password' element ={<PasswordForm/>} />
          </Routes>
        </Router>
    </>

  );
}

export default App;
