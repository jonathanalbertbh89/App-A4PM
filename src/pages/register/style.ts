import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        

        backgroundColor:'#ff6a28',

        
    }, 

    containerInputs:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
        
    input:{
        backgroundColor:'#fff' ,
        width: '80%',
        height: 55,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 22
    },
    
    textInput:{
        fontSize: 20,
        color: '#fff'
    },

    containerButton:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    button:{
        width: 150,
        height: 50,
        backgroundColor: '#00e005',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10,
        marginBottom: 15,

        
    },

    textButton:{
        fontSize: 20,
        color: '#fff',
        
    },


    alertCompare:{
        
       
    },

    textCompare:{
        
    }


})

export default Style