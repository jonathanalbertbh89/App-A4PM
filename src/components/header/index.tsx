import React from 'react';
import {View, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'

import style from './style'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Title {
    title?: string;
}

const Header = ({title}: Title) => {

    const navigation = useNavigation();
    function GoBack(){
        navigation.goBack();
    }

    return(
        <View style={style.container}>
            <RectButton 
                style={style.button}
                onPress={GoBack}    
                >
                <Feather name="arrow-left-circle" size={25} color="#fff"/>
            </RectButton>
            
            <Text style={style.textTitle}>
                {title}
            </Text>
            
            <View></View>
        </View>
    )
}

export default Header