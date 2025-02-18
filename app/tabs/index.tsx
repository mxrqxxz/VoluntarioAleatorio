import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobalStyles } from '@/src/theme/GlobalStyles'
import Voluntario from '@/src/components/Voluntario'
import { Usuario } from '../models/Usuario';
import { collection, getDocs, query } from 'firebase/firestore';
import { auth, db } from '@/Firebaseconfig';
import { getAuth } from 'firebase/auth';
import { router, useFocusEffect } from 'expo-router';
import { useAudioPlayer } from 'expo-audio';
import { Audio } from 'expo-av';

const Sorteo = () => {

  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace('/');
  });

  const user = getAuth().currentUser;

  const coleccionUsuarios = collection(db, 'Usuarios');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const [voluntario, setVoluntario] = useState<Usuario>({
    "id": "",
    "nombre": "???",
    "apellidos": "???",
    "bloqueado": false,
    "foto": require('../../assets/images/interrogacion.png'),
  });

  const imagenesLocales: { [key: string]: any } = {
    "usuario1.png": require('../../assets/images/usuarios/usuario1.png'),
    "usuario2.png": require('../../assets/images/usuarios/usuario2.png'),
    "usuario3.png": require('../../assets/images/usuarios/usuario3.png'),
    "usuario4.png": require('../../assets/images/usuarios/usuario4.png'),
    "usuario5.png": require('../../assets/images/usuarios/usuario5.png'),
    "usuario6.png": require('../../assets/images/usuarios/usuario6.png'),
    "usuario7.png": require('../../assets/images/usuarios/usuario7.png'),
    "usuario8.png": require('../../assets/images/usuarios/usuario8.png'),
    "usuario9.png": require('../../assets/images/usuarios/usuario9.png'),
    "usuario10.png": require('../../assets/images/usuarios/usuario10.png'),
  };

  useEffect(() => {
    cargarDatos();
  }, [user]);

  // Usamos useFocusEffect para recargar los datos cada vez que se cambie de tab
  useFocusEffect(
    React.useCallback(() => {
      cargarDatos(); // Llamar a la función de carga de datos
    }, [])  // Este array vacío hace que el efecto solo se ejecute cuando la pantalla recibe el foco
  );

  const cargarDatos = async () => {
    if (user) {
      const q = query(coleccionUsuarios);
      const datos = await getDocs(q);

      const usuariosFiltrados: Usuario[] = datos.docs
        .map((doc) => {
          const data = doc.data() as Usuario; // Asegurar que cumple con la interfaz
          return {
            id: doc.id, // Extraer el ID
            nombre: data.nombre || "Nombre no disponible",
            apellidos: data.apellidos || "Apellidos no disponibles",
            bloqueado: data.bloqueado ?? false,
            foto: data.foto || "interrogacion.png", // Foto por defecto
          };
        })
        .filter((usuario) => usuario.bloqueado === false);

      setUsuarios(usuariosFiltrados);
      console.log(usuariosFiltrados);
    }
  };

  // saca un voluntario aleatorio
  const sacarVoluntario = () => {
    const numero = Math.floor(Math.random() * usuarios.length);
    const voluntario: Usuario = usuarios[numero];

    // Verifica si la foto está en el objeto de imágenes locales
    const foto = voluntario.foto && imagenesLocales[voluntario.foto]
      ? imagenesLocales[voluntario.foto] // Imagen local
      : require('../../assets/images/interrogacion.png'); // Imagen por defecto

    setVoluntario({ ...voluntario, foto });

  }

  // saca muchos voluntarios para dar emocion y se queda con el ultimo
  const ruletaVoluntarios = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(sacarVoluntario, i * 600);
      
      if (i === 9) {
        setTimeout(playSound, i * 600);
      }
    }
  }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/audio/sonidoPremio.mp3')
    );
    
    await sound.playAsync();
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <ImageBackground source={require('../../assets/images/fondo.png')} style={GlobalStyles.background}>
      <View style={GlobalStyles.containerExpand}>
        <View style={GlobalStyles.contenedorTarjeta}>
          <Voluntario usuario={voluntario} />
        </View>
        <View style={[GlobalStyles.line, GlobalStyles.gap]} >
          <Pressable style={GlobalStyles.botonVoluntario} onPress={ruletaVoluntarios}>
            <Text style={GlobalStyles.textoBotonSorteo}>VOLUNTARIO ALEATORIO</Text>
          </Pressable>
          <Pressable style={GlobalStyles.botonDesconectar} onPress={signOut}>
            <Text style={GlobalStyles.textoBotonSorteo}>Desconectar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Sorteo