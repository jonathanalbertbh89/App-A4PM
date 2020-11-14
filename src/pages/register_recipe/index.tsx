import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { RectButton, ScrollView  } from 'react-native-gesture-handler';

import Header from '../../components/header/index';

import api from '../../services/connection-api'
import style from './style'

interface Id{
    id: number
}

interface Categoria{
    id: number,
    nome: string
}

const RegisterRecipe: React.FC = (children) =>{
    const route = useRoute()
    const params = route.params as Id

    const navigation = useNavigation()


    const [picker, setPicker] = useState<number>()
    const [categorias, setCatogorias] = useState([])
    const [id_usuarios, setIdUsuarios] = useState(params.id)
    const [nome, setNome] = useState('')
    const [tempo_preparo_minutos, setTempoPreparoMinutos] = useState('')
    const [porcoes, setPorcoes] = useState('')
    const [modo_preparo, setModoPreparo] = useState('')
    const [ingrediente, setIngrediente] = useState('');

    function handleRegisterRecipe(){
         api.post('/registerrecipe', {
            id_categorias: picker,
            id_usuarios: id_usuarios,
            nome: nome,
            tempo_preparo_minutos: Number(tempo_preparo_minutos),
            porcoes: Number(porcoes),
            modo_preparo: modo_preparo,
            ingrediente: ingrediente,
        }).then(response => (
            alert(response.data)
            
        ))
            navigation.navigate('HomePage')

    }

    

  

    useEffect(() => {
        api.get('/categories').then(response =>{
            setCatogorias(response.data)
        })
    })

    return(
        <View style={style.container}>
            <Header 
                title="Casdastre sua receita"
            />
            
            
                <ScrollView style={style.containerForm}>

                    <Text style={style.textTitleInput}>Nome</Text>
                    <TextInput 
                        style={style.textInput}
                        value={nome}
                        onChangeText={setNome}
                        />

                    <Text style={style.textTitleInput}>Categoria</Text>
                    <Picker 
                    
                    selectedValue={picker}
                    style={style.textInput}
                    onValueChange={(itemValue, label) => setPicker(itemValue as number)}

                    >
                        {
                            categorias.map((cat: Categoria) => {
                                return(
                                    <Picker.Item 
                                        key={cat.id}    
                                        label={cat.nome} 
                                        value={cat.id}/>
                                )   
                            } )
                        }
                        

                </Picker>

                    <Text style={style.textTitleInput}>Tempo de Preparo</Text>
                    <TextInput 
                        style={style.textInput} 
                        value={tempo_preparo_minutos}
                        onChangeText={setTempoPreparoMinutos}    
                        />

                    <Text style={style.textTitleInput}>Porções</Text>
                    <TextInput 
                        style={style.textInput}
                        value={porcoes}
                        onChangeText={setPorcoes}
                        />

                    <Text style={style.textTitleInput}>Ingredientes</Text>
                    <TextInput 
                        multiline={true || false}
                        numberOfLines={40}
                        textAlignVertical="top"
                        value={ingrediente}
                        onChangeText={setIngrediente}
                        
                        style={style.textLongInput}
                        />

                    <Text style={style.textTitleInput}>Modo de Prepero</Text>
                    <TextInput 
                        multiline={true || false}
                        numberOfLines={40}
                        textAlignVertical="top"
                        value={modo_preparo}
                        onChangeText={setModoPreparo}

                        style={style.textLongInput}
                        />

                    <View style={style.containerButton}>
                        <RectButton 
                            onPress={handleRegisterRecipe}    
                            style={style.buttonRegister}>
                            <Text style={style.textButton}>Cadastrar</Text>
                        </RectButton>
                        <RectButton style={style.buttonCancel}>
                            <Text style={style.textButton}>Cancelar</Text>
                        </RectButton>
                    </View>
                </ScrollView>
            
            
        </View>
    )
    
}

export default RegisterRecipe;