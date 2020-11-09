import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView:{
        width: '80%',
        marginTop: -15,
        borderRadius:10,
    },

    containerRecipe:{
        height: 65,

        backgroundColor: '#fff',
        borderRadius:10,
        padding: 10,
        
        marginBottom: 10
    },

    textRecipe:{
        fontSize: 15,
    },

    containerRecButton:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5,
        marginBottom:8
    },

    textButton:{
        fontSize: 15,
        color: '#ff6a28'
    }




})

export default Style