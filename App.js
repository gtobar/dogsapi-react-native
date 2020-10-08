import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, ScrollView, View, Text } from 'react-native';
import Formulario from './components/Formulario';
import BrowsePhotos from './components/BrowsePhotos';
import axios from 'axios';

function App() {

  const [breed, setBreed] = useState('');
  const [photos, setPhotos] = useState(['']);
  const [loading, setLoading] = useState(false);

  useEffect( () => {

    const getPhotos = async () => {
        // evitamos la ejecución la primera vez
        if(breed === '') return;

        // consultar la api para obtener la cotizacion
        const url = `https://dog.ceo/api/breed/${escape(breed)}/images`;
        console.log(url);

        const result = await axios.get(url);

        // mostrar el spinner
        setLoading(true);

        // ocultar el spinner y mostrar el resultado
        setTimeout(() => {

          // cambiar el estado de cargando
          setLoading(false);

          // guardar photos
          setPhotos(result.data.message);
        }, 3000);

        
    }
    getPhotos();
  }, [breed]);

  const Componente = (loading) 
    ?
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style = {styles.text}>Cargando..</Text>
      </View>
    :
      <View>
        <ScrollView>
          <Formulario 
              setBreed={setBreed}
            />

          <BrowsePhotos photos={photos} />

        </ScrollView>
      </View>
    ;

  return (
    Componente
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'gray'
 }
});

export default App;