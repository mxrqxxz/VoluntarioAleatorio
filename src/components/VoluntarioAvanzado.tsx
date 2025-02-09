import { View, Text, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { Usuario } from '@/app/models/Usuario'
import { GlobalStyles } from '@/src/theme/GlobalStyles';

interface Props {
    usuario: Usuario;
}

const VoluntarioAvanzado = ({ usuario }: Props) => {

    return (
        <View style={GlobalStyles.tarjeta}>
            <View style={{ flex: 3 }}>
                <ImageBackground source={usuario.foto} style={GlobalStyles.fotoUsuarioFondo}>
                    <View style={GlobalStyles.contenedorBotones}>
                        <Pressable style={[GlobalStyles.fondoVerde, GlobalStyles.botonCandado]}>
                            <Image style={GlobalStyles.iconoCandando} source={require('../../assets/images/desbloqueado.png')} />
                        </Pressable>
                        <Pressable style={[GlobalStyles.fondoRojo, GlobalStyles.botonCandado]}>
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