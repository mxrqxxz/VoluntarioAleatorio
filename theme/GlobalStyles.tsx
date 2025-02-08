import { StyleSheet,Dimensions } from "react-native"
import { Colores } from "./Colores";


const { width, height } = Dimensions.get('window');

export const GlobalStyles = StyleSheet.create({
    //Login
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCredenciales:{
        marginTop:30
    },
    titulo: {
        fontSize: 40,
        fontFamily:'Koulen',
        color:Colores.white,
    },
    input: {
        width:300,
        height: 40,
        borderWidth: 0,
        backgroundColor:Colores.white,
        fontFamily:'RopaSans',
        marginVertical:10,
        borderRadius: 5,
        alignItems:'center',
        fontSize:15,
        color:Colores.black,
    },
    line: {
        flexDirection: 'row',
    },
    boton: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginTop:15,
    },
    background:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
    },
    textoBoton:{
        fontFamily:'Koulen'
    }
    //Otra cosa
})