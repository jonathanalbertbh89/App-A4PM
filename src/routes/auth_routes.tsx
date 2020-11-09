import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import Login from '../pages/login';
import Register from '../pages/register';

const Stack = createStackNavigator()

const AuthRoutes: React.FC = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

export default AuthRoutes