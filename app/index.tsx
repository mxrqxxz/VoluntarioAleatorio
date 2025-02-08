import { View, Text, TextInput, Pressable, Alert, ImageBackground, ViewStyle } from 'react-native';
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
    <ImageBackground source={require('../assets/images/fondo.png')} style={GlobalStyles.background}>
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>WHO'S NEXT?</Text>
      <View style={GlobalStyles.containerCredenciales}>
      <TextInput value={email} onChangeText={setEmail} style={GlobalStyles.input} placeholder="Correo electrónico..." />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={GlobalStyles.input} placeholder="Contraseña..." />
      </View>
      <View style={GlobalStyles.line}>
        <Pressable onPress={goTabs} style={GlobalStyles.boton}>
          <Text style={GlobalStyles.textoBoton}>Acceder</Text>
        </Pressable>
      </View>
    </View>
    </ImageBackground>
  )
}

export default Index