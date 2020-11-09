import React, { useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import style from './style'

import AuthContext from '../../context/auth_context';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Login(){

    const {signIn} = useContext(AuthContext);

    function handleLogin(){
        signIn();
    }

    const navigation = useNavigation();
    function handleToRegister(){
        navigation.navigate('Register')
    }


    return(
        <View style={style.container}>
            <View style={style.form}>
                <Text style={style.textInput}>Login</Text>
                <TextInput 
                    style={style.input}
                    placeholder="digite seu usuaário" 
                />

                <Text style={style.textInput}>Senha</Text>
                <TextInput 
                    style={style.input}
                    placeholder= "digite sua senha"  
                    
                    />

                <RectButton 
                    
                    style={style.button}
                    onPress={signIn}>
                    <Text style={style.textButton}>Logar</Text>
                </RectButton>

                <RectButton 
                    
                >
                    <Text 
                        onPress={handleToRegister}    
                        style={style.textRegister}>
                        cadastre-se
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}

export default Login;