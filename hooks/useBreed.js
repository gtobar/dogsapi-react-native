import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const useBreed = (label, stateInicial, options) => {

    // State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const SelectBreed = () => (
        <View>
            <Text style = {styles.text}>{label}</Text>
            <Picker
                selectedValue={state}
                onValueChange={setState}
            >
                <Picker.Item key="" label = "- Seleccione -" value = "" />
                {options.map(opcion => (
                    <Picker.Item key={opcion} label = {opcion} value = {opcion} />
                ))}
            </Picker>
        </View>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectBreed, setState];
}

export default useBreed;

const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'blue'
    }
 })