import { loginAction } from '../server/formActions';
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { useActionState } from 'react';


function Login({ setToken }) {
    const navigate = useNavigate();
    const [state, formAction] = useActionState(loginAction, null)
     useEffect(() => {
       if (state?.success) {
         setToken(state?.token);
       }
     }, [state]);
     
  return (
    <div>
      <form>
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Login</button>
      </form>
      <p>You don't have a user yet?</p>
      <p>Go to <button onClick={() => navigate("/register")}>Register</button></p>
    </div>
  );
}

export default Login;
