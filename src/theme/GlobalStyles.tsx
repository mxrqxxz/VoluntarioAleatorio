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
        width:400,
        height: 60,
        borderWidth: 0,
        backgroundColor:Colores.input,
        fontFamily:'RopaSans',
        marginVertical:20,
        borderRadius: 5,
        alignItems:'center',
        fontSize: Tamanos.input,
    },
    line: {
        flexDirection: 'row',
    },
    gap: {
        gap: 20,
    },
    boton: {
        backgroundColor: Colores.boton,
        paddingVertical: 10,
        paddingHorizontal: 45,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginTop:20,
    },
    background:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
    },
    textoBoton:{
        fontFamily:'Koulen',
        fontSize:Tamanos.boton,
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
        height: 250,
        width: 135,
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
        width: 200,
        height: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotonSorteo: {
        fontFamily: 'Koulen',
        color: Colores.black,
        textAlign: 'center',
        fontSize:Tamanos.boton,
        padding: 5,
    },
    botonVoluntario: {
        backgroundColor: Colores.botonSorteo,
        borderWidth: 1,
        borderRadius: 10,
        height:50,
        width: 200,
    },
    botonDesconectar: {
        backgroundColor: Colores.bloqueado,
        borderWidth: 1,
        borderRadius: 10,
        width: 100,
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