import { View, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobalStyles } from '@/src/theme/GlobalStyles'
import VoluntarioAvanzado from '@/src/components/VoluntarioAvanzado';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/Firebaseconfig';
import { getAuth } from 'firebase/auth';
import { router, useFocusEffect } from 'expo-router';
import { Usuario } from '@/app/models/Usuario';

const Alumnos = () => {

  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace('/');
  });

  const user = getAuth().currentUser;
  const coleccionUsuarios = collection(db, 'Usuarios');
  const [usuariosLista, setUsuariosLista] = useState<Usuario[]>([]);

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
  
      // Mapea los datos y asegura que coincidan con la interfaz Usuario
      const usuariosConFotos: Usuario[] = datos.docs
        .map((doc) => {
          const data = doc.data() as Usuario; // Asegurar que cumple con el modelo Usuario
  
          return {
            id: doc.id,
            nombre: data.nombre || "Nombre no disponible",
            apellidos: data.apellidos || "Apellidos no disponibles",
            bloqueado: data.bloqueado ?? false,
            foto: data.foto && imagenesLocales[data.foto]
              ? imagenesLocales[data.foto] // Imagen local
              : require('../../../assets/images/interrogacion.png') // Imagen por defecto
          };
        });
  
      setUsuariosLista(usuariosConFotos);
    }
  };

  const imagenesLocales: { [key: string]: any } = {
    "usuario1.png": require('../../../assets/images/usuarios/usuario1.png'),
    "usuario2.png": require('../../../assets/images/usuarios/usuario2.png'),
    "usuario3.png": require('../../../assets/images/usuarios/usuario3.png'),
    "usuario4.png": require('../../../assets/images/usuarios/usuario4.png'),
    "usuario5.png": require('../../../assets/images/usuarios/usuario5.png'),
    "usuario6.png": require('../../../assets/images/usuarios/usuario6.png'),
    "usuario7.png": require('../../../assets/images/usuarios/usuario7.png'),
    "usuario8.png": require('../../../assets/images/usuarios/usuario8.png'),
    "usuario9.png": require('../../../assets/images/usuarios/usuario9.png'),
    "usuario10.png": require('../../../assets/images/usuarios/usuario10.png'),
  };

  return (
    <ImageBackground source={require('../../../assets/images/fondo.png')} style={GlobalStyles.background}>
      <View style={GlobalStyles.containerLinea}>
        <FlatList
          style={GlobalStyles.lista}
          data={usuariosLista}
          keyExtractor={(item) => item.foto} // no es lo más aconsejable pero funciona, se supone que no repetiran foto tampoco...
          numColumns={5}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            gap: 10,
            marginTop: 10,
            paddingBottom: 20
          }}
          columnWrapperStyle={{ gap: 10 }}
          renderItem={({ item }) => <VoluntarioAvanzado usuario={item} />}>

        </FlatList>
      </View>
    </ImageBackground>
  )
}

export default Alumnos