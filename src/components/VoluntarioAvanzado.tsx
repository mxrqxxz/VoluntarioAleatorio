import { View, Text, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { Usuario } from '@/app/models/Usuario'
import { GlobalStyles } from '@/src/theme/GlobalStyles';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/Firebaseconfig';

interface Props {
    usuario: Usuario;
    refreshData: () => void;
}

const VoluntarioAvanzado = ({ usuario, refreshData }: Props) => {

    // Función para desbloquear al usuario
    const desbloquearUsuario = async () => {
        try {
            const usuarioRef = doc(db, "Usuarios", usuario.id); // Referencia al documento en Firebase
            await updateDoc(usuarioRef, { bloqueado: false }); // Actualiza la propiedad en Firebase
            console.log(`Usuario ${usuario.nombre} desbloqueado correctamente`);
            refreshData(); // Refresca los datos de la pantalla
        } catch (error) {
            console.error("Error al desbloquear usuario:", error);
        }
    };

    // Función para bloquear al usuario
    const bloquearUsuario = async () => {
        try {
            const usuarioRef = doc(db, "Usuarios", usuario.id); // Referencia al documento en Firebase
            await updateDoc(usuarioRef, { bloqueado: true }); // Actualiza la propiedad en Firebase
            console.log(`Usuario ${usuario.nombre} bloqueado correctamente`);
            refreshData(); // Refresca los datos de la pantalla
        } catch (error) {
            console.error("Error al desbloquear usuario:", error);
        }
    };

    return (
        <View style={GlobalStyles.tarjeta}>
            <View style={{ flex: 3 }}>
                <ImageBackground source={usuario.foto} style={GlobalStyles.fotoUsuarioFondo}>
                    <View style={GlobalStyles.contenedorBotones}>
                        <Pressable style={[GlobalStyles.fondoVerde, GlobalStyles.botonCandado]} onPress={desbloquearUsuario}>
                            <Image style={GlobalStyles.iconoCandando} source={require('../../assets/images/desbloqueado.png')} />
                        </Pressable>
                        <Pressable style={[GlobalStyles.fondoRojo, GlobalStyles.botonCandado]} onPress={bloquearUsuario}>
                            <Image style={GlobalStyles.iconoCandando} source={require('../../assets/images/bloqueado.png')} />
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
            <View style={usuario.bloqueado ? [GlobalStyles.contenedorTextoTarjeta, GlobalStyles.fondoRojo]: [GlobalStyles.contenedorTextoTarjeta, GlobalStyles.fondoVerde]}>
                <Text adjustsFontSizeToFit style={GlobalStyles.textoTarjeta}>{usuario.nombre} {usuario.apellidos}</Text>
            </View>
        </View>
    )
}

export default VoluntarioAvanzado