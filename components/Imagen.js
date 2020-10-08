import React from 'react';
import { View, Image } from 'react-native';

const Imagen = ({imagen}) => {

    return ( 
        <View className="card">
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Simple_icon_time.svg'}} alt={imagen} className="card-img-top" />
        </View>
     );
}
 
export default Imagen;