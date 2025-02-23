import { auth } from "@/Firebaseconfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import { View, Text, TextInput, Pressable, Alert, ImageBackground, ViewStyle } from 'react-native';
import React from 'react'
import { GlobalStyles } from '@/src/theme/GlobalStyles'
import { router } from 'expo-router'

const Index = () => {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/tabs');
    } catch (error: any) {
      console.log("Error de inicio de sesión:", error);

      let errorMessage = "Ocurrió un error desconocido. Inténtalo de nuevo.";

      // Manejo de errores específicos de Firebase Auth
      switch (error.code) {
        case "auth/missing-email":
          errorMessage = "Introduce el correo.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Introduce correctamente el correo y la contraseña";
          break;  
        case "auth/invalid-email":
          errorMessage = "El correo electrónico no es válido.";
          break;
        case "auth/missing-password":
          errorMessage = "Contraseña no introducida";
          break;
        default:
          errorMessage = error.message;
          break;
      }

      Alert.alert("Inicio de sesión incorrecto", errorMessage);
    }
  };



  const register = async () => {
    try {
      const user = await (createUserWithEmailAndPassword(auth,email,password));
      if (user) router.replace('/tabs');
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error al registrar el usuario", error.message);
    }


  }

  return (
    <ImageBackground source={require('../assets/images/fondo.png')} style={GlobalStyles.background}>
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>WHO'S NEXT?</Text>
      <View style={GlobalStyles.containerCredenciales}>
      <TextInput value={email} onChangeText={setEmail} style={GlobalStyles.input} placeholder="Correo electrónico..." />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={GlobalStyles.input} placeholder="Contraseña..." />
      </View>
      <View style={[GlobalStyles.line, GlobalStyles.gap]}>
        <Pressable onPress={logIn} style={GlobalStyles.boton}>
          <Text style={GlobalStyles.textoBoton}>Acceder</Text>
        </Pressable>
        <Pressable onPress={register} style={GlobalStyles.boton}>
          <Text style={GlobalStyles.textoBoton}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
    </ImageBackground>
  )
}

export default Index