import {registerAction} from "../server/formActions";
import { useActionState } from "react";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

function Register({setToken}) {
    const [state, formAction] = useActionState(registerAction, null);
    const navigate = useNavigate();

    useEffect(() => {
        if(state?.success) {
            setToken(state?.token)
        }
    }, [state])

  return (
    <div>
      <form action={formAction}>
        <input type='text' name='username' placeholder='username' />
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button type='submit'>Login</button>
      </form>
      <p>You already have a user?</p>
      <p>
        Go to <button onClick={() => navigate('/login')}>Login</button>
      </p>
    </div>
  );
}

export default Register;
