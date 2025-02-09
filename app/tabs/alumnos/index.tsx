import { View, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/src/theme/GlobalStyles'
import VoluntarioAvanzado from '@/src/components/VoluntarioAvanzado';
import { Usuario } from '@/app/models/Usuario';
import { usuarios } from '@/data/usuarios.data';

const Alumnos = () => {
  const usuario: Usuario = usuarios[2];

  const usuariosLista = usuarios;

  return (
    <ImageBackground source={require('../../../assets/images/fondo.png')} style={GlobalStyles.background}>
        <View style={GlobalStyles.containerLinea}>
          <FlatList
            style={GlobalStyles.lista}
            data={usuariosLista}
            keyExtractor={(item) => item.id.toString()}
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