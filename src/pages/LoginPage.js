import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import { SignIn } from '../components/SignIn';
import { Registration } from '../components/Registration';

// present forms required for login/registration if not already logged in.

export const LoginPage = (props) =>{
    const {user} = useContext(UserContext);

    return (
        //if no user.id value passed in display the login/registration forms
        <div>
           {!user.id && <div className='LoginForm' ><SignIn /><div className="fill"/><Registration /></div>}
        </div>
    )
}