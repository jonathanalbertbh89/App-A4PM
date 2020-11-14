import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { RectButton, ScrollView  } from 'react-native-gesture-handler';

import Header from '../../components/header/index';
import api from '../../services/connection-api'

import style from './style'


interface Categoria{
    id: number,
    nome: string
}

interface Recipes{
    id: number,
    id_categorias: number,
    nome: string,
    tempo_preparo_minutos: number,
    porcoes: number,
    modo_preparo: string,
    ingredientes: string,
    nomecategoria: string
}  


const EditRecipe: React.FC = (children) =>{
    

    const navigation = useNavigation();

    const route = useRoute();
    const params = route.params as Recipes;


    const [picker, setPicker] = useState<number>(params.id_categorias)
    const [categorias, setCatogorias] = useState([])
    const [id, setId] = useState<number>(params.id)
    const [id_categorias, setIdCategorias] = useState<number>(picker)
    const [nome, setNome] = useState(params.nome)
    const [tempo_preparo_minutos, setTempoPreparoMinutos] = useState(String(params.tempo_preparo_minutos))
    const [porcoes, setPorcoes] = useState(String(params.porcoes))
    const [modo_preparo, setModoPreparo] = useState(params.modo_preparo)
    const [ingredientes, setIngredientes] = useState(params.ingredientes)
    const [nomecategoria, setNomecategoria] = useState(params.nomecategoria)

    

    useEffect(() => {
        api.get('/categories').then(response =>{
            setCatogorias(response.data)
        })
    })

    async function HableEditRecipo(){
        api.put('/editrecipe',{
            id: id,
            id_categorias: picker,
            nome: nome,
            tempo_preparo_minutos: Number(tempo_preparo_minutos),
            porcoes: Number(porcoes),
            modo_preparo: modo_preparo,
            ingredientes: ingredientes, 
         }).then(response =>(
             alert(response.data)
         ))

         navigation.navigate('HomePage')
    }
   


    return(
        <View style={style.container}>
            <Header 
                title="Editar Receita"
            />
            
            
                <ScrollView 
                    fadingEdgeLength={10}
                    
                    style={style.containerForm}>

                    <Text style={style.textTitleInput}>Nome</Text>
                    <TextInput 
                        value={nome}
                        style={style.textInput}
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
                        value={tempo_preparo_minutos}
                        style={style.textInput} 
                        onChangeText={setTempoPreparoMinutos}
                        
                        />

                    <Text style={style.textTitleInput}>Porções</Text>
                    <TextInput 
                        value={porcoes}
                        onChangeText={setPorcoes} 
                        style={style.textInput}
                        
                        />

                    <Text style={style.textTitleInput}>Ingredientes</Text>
                    <TextInput 
                        value={ingredientes}
                        onChangeText={setIngredientes}
                        multiline={true || false}
                        numberOfLines={40}
                        textAlignVertical="top"

                        
                        
                        style={style.textLongInput}
                        />

                    <Text style={style.textTitleInput}>Modo de Prepero</Text>
                    <TextInput 
                        value={modo_preparo}
                        multiline={true || false}
                        numberOfLines={40}
                        textAlignVertical="top"
                        onChangeText={setModoPreparo}
                        
                        
                        style={style.textLongInput}
                        />

                    <View style={style.containerButton}>
                        <RectButton 
                            onPress={HableEditRecipo}
                            style={style.buttonRegister}>
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