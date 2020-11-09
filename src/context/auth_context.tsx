import React, {createContext, useState} from 'react';
import * as auth from '../services/api-rest';
 

interface AuthContextData{
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<object | null>(null);

    async function signIn(){
        const response = await auth.signIn();

        setUser(response.user)
    }

    function logOut(){
        setUser(null)
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