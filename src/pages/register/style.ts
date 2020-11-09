import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor:'#ff6a28',
    }, 
    
    form:{
        width:'70%',
        height:'70%',

        backgroundColor: '#f1f1f1',

        borderRadius: 10,
      
        justifyContent: 'center'
    },
    
    input:{
        backgroundColor: '#FFF',

        width: '80%',
        height: 35,
        paddingLeft: 10,
        marginBottom: 15,
        marginLeft: 15,
        borderRadius:10,
    },
    
    textInput:{
        color: '#ff6a28',

        marginLeft: 15,
        fontSize: 20,
        marginBottom: 5,
    },

    containerButton:{
        alignItems: 'center',
    },

    button:{
        backgroundColor:'#ff6a28',

        width: '50%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton:{
        color: '#FFF'
    },




})

export default Style