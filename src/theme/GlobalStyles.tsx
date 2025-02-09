import { StyleSheet,Dimensions } from "react-native"
import { Colores } from "./Colores";
import { Tamanos } from "./Tamanos";


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
        fontSize: Tamanos.titulo,
        fontFamily:'Koulen',
        color:Colores.titulo,
    },
    input: {
        width:300,
        height: 40,
        borderWidth: 0,
        backgroundColor:Colores.input,
        fontFamily:'RopaSans',
        marginVertical:10,
        borderRadius: 5,
        alignItems:'center',
        fontSize: Tamanos.input,
    },
    line: {
        flexDirection: 'row',
    },
    boton: {
        backgroundColor: Colores.boton,
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
    },
    // Tarjeta usuario
    containerExpand: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tarjeta: {
        borderWidth: 1,
        borderColor: Colores.black,
        borderRadius: 10,
        backgroundColor: Colores.white,
        height: 150,
        width: 100,
    },
    textoTarjeta: {
        fontFamily: 'RopaSans',
        textAlign: 'center',
        justifyContent: 'center',
    },
    fotoUsuario: {
        height: '70%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    contenedorTextoTarjeta: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    fondoVerde: {
        backgroundColor: Colores.desbloqueado,
    },
    fondoRojo: {
        backgroundColor: Colores.bloqueado,
    },
    contenedorTarjeta: {
        backgroundColor: Colores.contenedorTarjeta,
        width: 170,
        height: 170,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotonSorteo: {
        fontFamily: 'Koulen',
        color: Colores.black,
        textAlign: 'center',
        padding: 5,
    },
    botonVoluntario: {
        backgroundColor: Colores.botonSorteo,
        borderWidth: 1,
        borderRadius: 10,
        width: 170,
    },

    // Alumnos
    containerLinea: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    lista: {
        flexGrow: 1,
    },
    contenedorBotones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
    },
    iconoCandando: {
        width: 30,
        height: 30,
    },
    fotoUsuarioFondo: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden', // Evita que la imagen se desborde
    },
    botonCandado: {
        padding: 5,
        borderRadius: 10,
    }
})