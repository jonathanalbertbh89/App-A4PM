import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6a28'    
    },

    containerImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    images:{
        width: 150,
        height: 150,
        borderRadius: 10,
    },



    containerInputs:{
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom: 50
    },

    input:{
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:10,
        fontSize: 18
    },

    buttonAcess:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,

        marginTop: 15,
        borderRadius: 10,

        backgroundColor: '#00e005'
    },

    textButtonAcess:{
        fontSize: 16, 
        color: '#fff'
    },

    buttonRegister:{
        marginTop: 20
    },

    textButtonRegister:{
        fontSize: 15,
        color: '#0b00ec'
    }

    

})

export default Style