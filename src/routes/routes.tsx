import React, { useContext } from 'react';

import AuthRoutes from './auth_routes';
import AppRoutes from './app_routes';

import AuthContext,{AuthProvider} from '../context/auth_context';




const Routes: React.FC = () =>{

    const {signed} = useContext(AuthContext)
    return(
                  !signed ? 
                    <AppRoutes/>
                        :
                    <AuthRoutes/>    

    )
}

export default Routes