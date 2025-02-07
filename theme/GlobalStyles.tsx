import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 22
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 5
    },
    line: {
        flexDirection: 'row',
    },
    boton: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 2
    },
    danger: {
        backgroundColor: 'red',
    },
    negrita: {
        fontWeight: 'bold'
    }
})