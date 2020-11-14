import React, { useCallback, useContext, useState } from 'react';
import { View, Text, RefreshControl, SafeAreaView} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/header_page_home/index'
import {Feather} from '@expo/vector-icons';

import api from '../../services/connection-api'

import style from './style'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import AuthContext, {AuthProvider} from '../../context/auth_context'

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



interface User{
    user:{
        id: number,
        nome: string
    }
}


  

const HomePage = () => {
    
    const {user} = useContext(AuthContext)

    const[recipes, setRecipes] = useState([])

    const dateUser = user as User
    const [id_usuarios, setIdUsuarios] = useState<number>(dateUser.user.id as number)

    

    
    
    const navigation  = useNavigation()
    function navigateToCreateRecipe(id: number){
        navigation.navigate('RegisterRecipe', {id})
    }
    function navigateToEditeRecipe( 
        id: number,
        id_categorias: number,
        nome: string,
        tempo_preparo_minutos: number,
        porcoes: number,
        modo_preparo: string,
        ingredientes: string,
        nomecategoria: string
    ){
        navigation.navigate('EditRecipe', {
            id,
            id_categorias,
            nome,
            tempo_preparo_minutos,
            porcoes,
            modo_preparo,
            ingredientes,
            nomecategoria  
        })
    }

    

    useFocusEffect(() => {
         api.post('/recipe',{
            id_usuarios
        }).then(response=>{
            setRecipes(response.data)
            
        })
    })
    
    
    return(

        
        

        <View 
            
            style={style.container}>
            
            <Header/>

            <ScrollView 
                
                style={style.scrollView}>

                {
                    recipes.map((map: Recipes) => {
                        return(
                            <RectButton 
                                key={map.id}
                                onPress={() => navigateToEditeRecipe(
                                    map.id,
                                    map.id_categorias,
                                    map.nome,
                                    map.tempo_preparo_minutos,
                                    map.porcoes,
                                    map.modo_preparo,
                                    map.ingredientes,
                                    map.nomecategoria,
                                    
                                )}
                                style={style.containerRecipe}>
                                <Text style={style.textRecipe}>Nome: {map.nome}</Text>
                        <Text style={style.textRecipe}>Categoria: {map.nomecategoria}</Text>
                            </RectButton>
                        )
                    })
                }
                
                
            </ScrollView>

            <RectButton 
                onPress={() => navigateToCreateRecipe(id_usuarios)
                              
                }
                style={style.containerRecButton}>
                    <Feather name="plus-circle" size={25} color="#ff6a28"/>
                    <Text style={style.textButton}>Adicione um receita</Text>
            </RectButton>
        </View>
    )
}

export default HomePage;