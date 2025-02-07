import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { router } from 'expo-router'

const Index = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const goTabs = () => {
    router.push('/tabs')
  }

  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Inicio de sesión</Text>
      <TextInput value={email} onChangeText={setEmail} style={GlobalStyles.input} placeholder="Usuario" />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={GlobalStyles.input} placeholder="Contraseña" />
      <View style={GlobalStyles.line}>
        <Pressable onPress={goTabs} style={GlobalStyles.boton}>
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={goTabs} style={GlobalStyles.boton}>
          <Text>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Index