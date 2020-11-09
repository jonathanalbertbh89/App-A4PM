import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import style from './style'

function Register(){
    return(
        <View style={style.container} >
            <View style={style.form}>
                <Text style={style.textInput}>Nome</Text>
                <TextInput style={style.input}/>

                <Text style={style.textInput}>Email</Text>
                <TextInput style={style.input}/>

                <Text style={style.textInput}>Senha</Text>
                <TextInput style={style.input}/>

                <Text style={style.textInput}>Repetir Senha</Text>
                <TextInput style={style.input}/>

                <View style={style.containerButton}>
                    <RectButton 
                        onPress={()=>{}}    
                        style={style.button}>
                        <Text style={style.textButton} >Cadastrar</Text>
                    </RectButton>
                </View>
               

            </View>
        </View>
    )
}

export default Register;