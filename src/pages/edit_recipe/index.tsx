import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { RectButton, ScrollView  } from 'react-native-gesture-handler';

import Header from '../../components/header/index';

import style from './style'

const EditRecipe: React.FC = (children) =>{
    return(
        <View style={style.container}>
            <Header 
                title="Editar Receita"
            />
            
            
                <ScrollView style={style.containerForm}>

                    <Text style={style.textTitleInput}>Nome</Text>
                    <TextInput style={style.textInput} />

                    <Text style={style.textTitleInput}>Categoria</Text>
                    <TextInput style={style.textInput} />
                    {/* Substituir por Picker*/}

                    <Text style={style.textTitleInput}>Tempo de Preparo</Text>
                    <TextInput style={style.textInput} />

                    <Text style={style.textTitleInput}>Porções</Text>
                    <TextInput style={style.textInput} />

                    <Text style={style.textTitleInput}>Modo de Prepero</Text>
                    <TextInput 
                        multiline={true || false}
                        numberOfLines={40}
                        textAlignVertical="top"
                        
                        
                        style={style.textLongInput}
                        />

                    <View style={style.containerButton}>
                        <RectButton style={style.buttonRegister}>
                            <Text style={style.textButton}>Confirma</Text>
                        </RectButton>
                        <RectButton style={style.buttonCancel}>
                            <Text style={style.textButton}>Cancelar</Text>
                        </RectButton>
                    </View>
                </ScrollView>
            
            
        </View>
    )
    
}

export default EditRecipe;