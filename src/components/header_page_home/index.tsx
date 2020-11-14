import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import api from '../../services/connection-api'

import {Feather} from '@expo/vector-icons'

import style from './styles'
import { RectButton, TextInput } from 'react-native-gesture-handler';

import AuthContext from '../../context/auth_context'
import { useNavigation } from '@react-navigation/native';

interface Categoria{
    id: number,
    nome: string
}




const Header: React.FC = () =>{
    const [picker, setPicker] = useState<number>()
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const [categories, setCatogories] = useState([])

    const navigation = useNavigation()

    function GoBack(){
        navigation.goBack()
    }

    useEffect(() => {
        api.get('/categories').then(response =>{
            setCatogories(response.data)
        })
    })

    function modalVisibleTrue(){
        setModalVisible(true)
    }

    function modalVisiblefalse(){
        setModalVisible(false)

    }

    const {logOut} = useContext(AuthContext)
    function handlerLogOut(){
        logOut()
    }

    console.log(modalVisible)

    return(
        <View style={style.container}>
            <View
                style={style.containerTitle}
            >
                <Text
                    style={style.title}
                >
                    Lista de Receitas
                    </Text>

                <RectButton 
                    onPress = {handlerLogOut}
                    style={style.buttonLogout}>
                        <Text style={style.textLogout}>sair</Text>
                    </RectButton> 


            </View>

               

            <View style={style.containerFilter}>
                <Picker 
                    
                    selectedValue={picker}
                    style={style.picker}
                    onValueChange={(itemValue) => setPicker(itemValue as number)}

                    >
                        {
                            categories.map((cat: Categoria) => {
                                return(
                                    <Picker.Item 
                                        key={cat.id}    
                                        label={cat.nome} 
                                        value={cat.id}/>
                                )   
                            } )
                        }
                        

                </Picker>


                <TextInput 
                    style={style.input}
                    placeholder="Digite o nome de uma receita"
                />
            </View>

            <View style={style.containerButton}>
                <Feather name="filter" size={20} color="#FFF"/>
                <RectButton>
                    <Text style={style.textButton} >Filtrar</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default Header