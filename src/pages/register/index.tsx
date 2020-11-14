import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/connection-api'

import style from './style'




function Register(){

    const navigation = useNavigation()

    const [nome, setNome] = useState('')
    const [login, setLogin] = useState('')
  
    const [senha, setSenha] = useState('')
    const [senhaCompare, setSenhaCompare] = useState('')

    const [resultCompare, setResultCompare] = useState(false)


    function PasswordCompate(){
        if (senha !== senhaCompare) return setResultCompare(true)
    }

    function handleRegisterUser(){
        api.post('/userregister',{
            nome: nome,
            login: login,
            senha: senha
        }).then(response => (
            alert(response.data)
        ))
        navigation.navigate('Login')

    }

    return(
        <KeyboardAvoidingView 
            
            style={style.container} >
            <View style={style.containerInputs}>
                <Text style={style.textInput}>Nome</Text>
                    <TextInput 
                        style={style.input}
                        value={nome}
                        onChangeText={setNome}
                        />

                    <Text style={style.textInput}>Email</Text>
                    <TextInput 
                        style={style.input}
                        value={login}
                        onChangeText={setLogin}
                        />

                    <Text style={style.textInput}>Senha</Text>
                    <TextInput 
                        style={style.input}
                        value={senha}
                        onChangeText={setSenha}
                        />

                    <Text style={style.textInput}>Repetir Senha</Text>
                    <TextInput 
                        
                        style={style.input}
                        value={senhaCompare}
                        onChangeText={setSenhaCompare}
                        />

                    {
                        resultCompare ? (
                            <View style={style.alertCompare}>
                                <Text style={style.textCompare}>senhas não combinam</Text>        
                            </View>
                        ): <View></View>

                    }

                        <View style={style.containerButton}>
                            <RectButton 
                                onPress={handleRegisterUser}    
                                style={style.button}>
                                <Text style={style.textButton} >Cadastrar</Text>
                            </RectButton>
                        </View>
                    

                </View>
                
            
        </KeyboardAvoidingView>
    )
}

export default Register;