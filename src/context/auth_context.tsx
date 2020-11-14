
import React, {createContext, useState } from 'react';
import api from '../services/connection-api'
 
interface UserData{
    user:{
        id: number
        name: string,
    },
    token: string
}

interface AuthContextData{
    signed: boolean,
    user: object | null,
    signIn(login: string, senha: string): Promise<void>,
    logOut(): void,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<UserData | null>(null);

    
    

    async function signIn(login: string, senha: string){
              
        api.post('/userlogin', {
            login,
            senha
        }).then(response =>{
            response.status == 401 ? (
                alert(response.data)
            ): (
                setUser(response.data)
            )
        })
            
    
    
    }

    function logOut(){
        setUser(null);
        
    }

    return(
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signIn,
            logOut
            
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext