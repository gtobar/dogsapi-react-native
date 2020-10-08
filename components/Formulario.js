import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';

import Error from './Error';
import useBreed from '../hooks/useBreed';
import axios from 'axios';


const Formulario = ({setBreed}) => {

    // state del listado de razas
    const [ breeds, setBreeds ] = useState([]);
    const [ error, guardarError] = useState(false);

    // utilizar raza
    const [breed, SelectBreed] = useBreed('Elige tu Raza', '', breeds);

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://dog.ceo/api/breeds/list/all';

            const resultado = await axios.get(url);
            let l = [];
            if (resultado.status && resultado.status === 'error') {
                guardarError(resultado.message);
            } else {
                
                if (resultado.data.message) {
                    const x = resultado.data.message;
                    for (const property in x) {
                        if (x[property].length > 0) {
                            for (const subproperty in x[property]) {
                                l.push(`${property}/${x[property][subproperty]}`.trim());
                            }
                        } else {
                            l.push(property);
                        }
                    }
                }
    
                setBreeds(l);
            }
        }

        consultarAPI();
    }, []);


    // cuando el usuario hace submit
    const getDogs = e => {
        e.preventDefault();

        // validar si ambos campos estan llenos
        if(breed === '') {
            guardarError(true);
            return;
        }

        // pasar los datos al componente principal
        guardarError(false);
        setBreed(breed);
    }

    return ( 
        <View>
            {error ? <Error mensaje="Seleccione la Raza para continuar" /> : null}

            <SelectBreed />

            <Button
                title="Cargar"
                onPress={getDogs}
            />
        </View>
     );
}
 
export default Formulario;