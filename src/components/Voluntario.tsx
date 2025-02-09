import { View, Text, Image } from 'react-native'
import React from 'react'
import { Usuario } from '@/app/models/Usuario'
import { GlobalStyles } from '@/src/theme/GlobalStyles';

interface Props {
    usuario: Usuario;
}

const Voluntario = ({ usuario }: Props) => {

    return (
        <View style={GlobalStyles.tarjeta}>
            <Image source={usuario.foto} style={GlobalStyles.fotoUsuario} />
            <View style={GlobalStyles.contenedorTextoTarjeta}>
                <Text adjustsFontSizeToFit style={GlobalStyles.textoTarjeta}>{usuario.nombre} {usuario.apellidos}</Text>
            </View>
        </View>
    )
}

export default Voluntario