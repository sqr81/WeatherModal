import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Index(){
  return (
    <>
      <View>
      <Text>Hello Baroudeur</Text>
        <Image source={require('../../assets/carteBaroudeur.jpg')} />
      </View>
    </>
  );
}
