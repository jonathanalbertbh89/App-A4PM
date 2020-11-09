import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Feather} from '@expo/vector-icons'

import style from './styles'
import { RectButton, TextInput } from 'react-native-gesture-handler';



const Header: React.FC = () =>{
    const [picker, setPicker] = useState<string>('')
    const [modalVisible, setModalVisible] = useState(false)

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
                    onPress = {()=>{setModalVisible(true)}}
                    style={style.buttonLogout}>
                        <Text style={style.textLogout}>sair</Text>
                    </RectButton> 


                <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}

                    >
                        <View style={style.containerModal}>
                            <Text
                                style={style.textModal}
                            >
                                Deseja realmente sair do sistema
                            </Text>
                            <View style={style.containerButtonModal}>
                                <RectButton style={style.buttonExit}>
                                    <Text style={style.textButtonModal}>Sair</Text>
                                </RectButton>
                                <RectButton 
                                    onPress={()=>{setModalVisible(!modalVisible)}}
                                    style={style.buttonCancel}>
                                    <Text style={style.textButtonModal}>Cancelar</Text>
                                </RectButton>
                            </View>
                        </View>
                    </Modal>    
            </View>

               

            <View style={style.containerFilter}>
                <Picker 
                    
                    selectedValue={picker}
                    style={style.picker}
                    onValueChange={(itemValue) => setPicker(itemValue as string)}

                    >
                        <Picker.Item label="Bolos e tortas doces" value="Bolos e tortas doces"/>
                        <Picker.Item label="Carnes" value="Carnes"/>
                        <Picker.Item label="Aves" value="Aves"/>
                        <Picker.Item label="Peixes e frutos do mar" value="Peixes e frutos do mar"/>
                        <Picker.Item label="Saladas, molhos e acompanhamentos" value="Saladas, molhos e acompanhamentos"/>
                        <Picker.Item label="Soṕas" value="Soṕas"/>
                        <Picker.Item label="Massas" value="Massas"/>
                        <Picker.Item label="Bebidas" value="Bebidas"/>
                        <Picker.Item label="Doces e sobremesas" value="Doces e sobremesas"/>
                        <Picker.Item label="Lanches" value="Lanches"/>
                        <Picker.Item label="Prato Único" value="Prato Único"/>
                        <Picker.Item label="Light" value="Light"/>
                        <Picker.Item label="Alimentação Saudável" value="Alimentação Saudável"/>
                        

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