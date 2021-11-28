import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import { SignIn } from '../components/SignIn';
import { Registration } from '../components/Registration';

export const LoginPage = (props) =>{
    const {user} = useContext(UserContext);

    return (
        <div>
           {!user.id && <div><SignIn /><Registration /></div>}
        </div>
    )
}