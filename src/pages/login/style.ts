import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor:'#ff6a28',
    }, 

    form:{  
        width:'55%',
        height:'40%',

        backgroundColor: '#f1f1f1',

        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center'
    }, 

    input:{
        backgroundColor: '#FFF',

        width: '80%',
        height: 35,
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 10
    },

    button:{

        backgroundColor:'#ff6a28',

        width: '50%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput:{
        color: '#ff6a28',

        marginLeft: -130,
        fontSize: 20,
        marginBottom: 5,


    }, 

    textButton:{
        color: '#FFF'
    },

    textRegister:{

        color: '#ff6a28',

        marginTop: 5
    }


})

export default Style