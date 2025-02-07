import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

const Alumnos = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style={GlobalStyles.titulo}>Ventana de alumnos</Text>
    </View>
  )
}

export default Alumnos