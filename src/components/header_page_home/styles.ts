import {StyleSheet} from 'react-native'

const Style = StyleSheet.create({
    container:{
        
        backgroundColor: '#ff6a28',

        width:'100%',
        height: 135,
        justifyContent: 'center',
        padding: 15,
        alignItems: 'center',
        

        borderBottomLeftRadius: 15,
        borderBottomRightRadius:15,



    },

    containerTitle:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
    },

    buttonLogout:{
        width:'20%',
        
    },

    textLogout:{
        color:'#fff'
    },

    title:{
        width: '80%',
        fontSize: 20,
        color: '#fff',

        paddingLeft: 75,
        marginLeft: 100,
        marginBottom: 5
    },

    containerFilter:{
        flex: 1,
        justifyContent: 'center',

        flexDirection: 'row',
        marginBottom: 20
    },

    picker:{
        backgroundColor: '#fff',

        width: '40%',
        height:35,
        
    },

    input:{
        marginLeft: 15,
        backgroundColor: '#fff',

        borderRadius: 10,
        width: '40%',
        height:35,
    },

    containerButton:{
        flex: 1,
        width:80,
        height:40,
        

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginBottom: 10
    },

    button:{
        backgroundColor: '#fff'
    },

    textButton:{
        color: '#FFF'
    },

    /* ===========================================================
    
                            Style Modal
        ========================================================
    */


    containerModal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        
    },

    textModal:{
        fontSize: 20
    },

    containerButtonModal:{
        alignItems: 'center',    
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
    },

    buttonExit:{

        width: '35%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',


        backgroundColor: '#6bd600',
        },
    
    buttonCancel:{
        width: '35%',
        height: 40,
        borderRadius: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#f91717'



    },

    textButtonModal:{
        color: '#fff',
        fontSize: 18
    }
})

export default Style