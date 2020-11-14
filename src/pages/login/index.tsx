import React, { useContext, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import style from './style'

import AuthContext from '../../context/auth_context';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/menu.png'

function Login(){

    const {signIn} = useContext(AuthContext);
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

       
    function handleLogin(){
        signIn(name, password)
        
    }

    const navigation = useNavigation();
    function handleToRegister(){
        navigation.navigate('Register')
    }


    return(
        <KeyboardAvoidingView style={style.container}>
            <View style={style.containerImage}>
                <Image source={Logo} style={style.images}/>
            </View>
                

                

                <View style={style.containerInputs}>
                    <TextInput 
                        style={style.input}
                        autoCompleteType="email"
                        
                        value={name}
                        placeholder="e-mail"
                        autoCorrect={false}
                        onChangeText={setName}
                        
                    />

                    <TextInput 
                        style={style.input}
                        secureTextEntry={true}
                        value={password}
                        placeholder="senha"
                        onChangeText={setPassword}
                        />

                    <RectButton 
                        style={style.buttonAcess}
                        onPress={handleLogin}
                        >
                            <Text style={style.textButtonAcess}>Acessar</Text>
                        </RectButton>

                    <RectButton 
                        style={style.buttonRegister}
                        onPress={handleToRegister}
                        >   
                            <Text style={style.textButtonRegister}>Cadastre-se</Text>
                        </RectButton>           
                </View>
            

        </KeyboardAvoidingView>
    )
}

export default Login;