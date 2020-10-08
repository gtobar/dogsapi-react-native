import React from 'react';
import { Text, StyleSheet } from 'react-native'

const Error = ({mensaje}) => {
    return (  
        <Text style = {styles.text}>{mensaje}</Text>
    );
}
 
export default Error;

const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'red'
    }
 })