import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/header_page_home/index'
import {Feather} from '@expo/vector-icons';


import style from './style'
import { useNavigation } from '@react-navigation/native';

function HomePage(){

    const navigation  = useNavigation()
    function navigateToCreateRecipe(){
        navigation.navigate('RegisterRecipe')
    }
    function navigateToEditeRecipe(){
        navigation.navigate('EditRecipe')
    }

    return(
        <View style={style.container}>
            <Header/>

            <ScrollView style={style.scrollView}>
                <RectButton 
                    onPress={navigateToEditeRecipe}
                     style={style.containerRecipe}>
                    <Text style={style.textRecipe}>Nome</Text>
                    <Text style={style.textRecipe}>Categoria</Text>
                </RectButton>
                
            </ScrollView>

            <RectButton 
                onPress={navigateToCreateRecipe}
                style={style.containerRecButton}>
                    <Feather name="plus-circle" size={25} color="#ff6a28"/>
                    <Text style={style.textButton}>Adicione um receita</Text>
            </RectButton>
        </View>
    )
}

export default HomePage;