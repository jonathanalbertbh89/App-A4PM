import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/home_page';
import RegisterRecipe from '../pages/register_recipe';
import EditRecipe from '../pages/edit_recipe';
import Header from '../components/header';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen 
                name="HomePage" 
                component={HomePage}
                />
            <Stack.Screen 
                name="RegisterRecipe" 
                component={RegisterRecipe}

                />
            <Stack.Screen name="EditRecipe" component={EditRecipe}/>
        </Stack.Navigator>
    )
}

export default AppRoutes