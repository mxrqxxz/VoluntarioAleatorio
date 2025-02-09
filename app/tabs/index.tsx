import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/src/theme/GlobalStyles'
import Voluntario from '@/src/components/Voluntario'
import { Usuario } from '../models/Usuario';
import { usuarios } from '@/data/usuarios.data';

const Sorteo = () => {

  const usuario: Usuario = usuarios[2];

  return (
    <ImageBackground source={require('../../assets/images/fondo.png')} style={GlobalStyles.background}>
      <View style={GlobalStyles.containerExpand}>
        <View style={GlobalStyles.contenedorTarjeta}>
          <Voluntario usuario={usuario} />
        </View>
        <Pressable style={GlobalStyles.botonVoluntario}>
          <Text style={GlobalStyles.textoBotonSorteo}>VOLUNTARIO ALEATORIO</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

export default Sorteo