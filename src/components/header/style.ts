import {StyleSheet} from 'react-native'

const Style = StyleSheet.create({
    container: {
        
        backgroundColor: '#ff6a28',

        width:'100%',
        height: 80,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10


    },

    button:{
        marginLeft: 5
    },

    textTitle:{
        fontSize: 20,
        color: '#fff'
    }
})

export default Style