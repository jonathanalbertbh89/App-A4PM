import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        

        paddingBottom: 5
    },

    containerForm:{
        
        width: '90%',
        paddingBottom:5,
        padding: 15,
       
        
        
       
    },

    textTitleInput:{
        fontSize: 20,
    },

    textInput:{
        width:'100%',
        height: 35,
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 10,
        

        backgroundColor: '#dcdcdc',
    },

    textLongInput:{
        width:'100%',
        
        paddingLeft: 10,
        paddingTop: 10,
        marginBottom: 15,
        borderRadius: 10,
        

        backgroundColor: '#dcdcdc',
    },

    containerButton:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        



    },

    buttonRegister:{
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#6bd600'
    },

    buttonCancel:{
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#f91717'

    },

    textButton:{
        color: '#FFF',
        fontSize: 15 ,
    }

    
    
})

export default Style