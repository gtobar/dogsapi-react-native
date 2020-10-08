import React from 'react';
import { View, Image } from 'react-native';

const BrowsePhotos = ({photos}) => {
    return ( 
        <View className="col-12 p-5 row">
            {photos.map(p => (

            <Image source={{uri: p}} alt="{p}" className="card-img-top"
            style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />

            ))}
        </View>
    );
}
 
export default BrowsePhotos;