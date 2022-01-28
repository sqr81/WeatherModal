import React  from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';

export default function CurrentWeather() {

  return (
    <>   
      <View style={styles.container}>    
        <Text style={styles.city}>Castiglione</Text>
        <Text style={styles.aujourdhui}>Aujourd'hui</Text>
        <Image style={styles.image} source={require('../../../assets/ciel-clair.png')}></Image>
        <Text style={styles.temperature}>7°C</Text>
        <Text style={styles.weatherType}>éclaircie</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  aujourdhui:{
    position:'relative',
    top:'10%',
    fontSize: 20 , 
    textAlign:'center', 
    color:'#ffffff',
  },
  
  city:{
    position:'relative',
    top:'5%',
    fontSize: 30,
    color:'#ffffff',
    textAlign:'center', 
  },
  
  container:{
    backgroundColor: '#00587A',
    alignItems:'center',
    borderRadius: 12,
    paddingBottom: '50%',
  },

  image:{
    width: 100,
    height: 100,
    position:'relative',
    top:'20%',
   
  },

  temperature:{
    position:'relative',
    top:'30%',
    fontSize: 60, 
    fontWeight:'bold', 
    textAlign:'center',
    color:'#ffffff',
  },

  weatherType:{
    position:'relative',
    top:'30%',
    fontSize: 30, 
    fontWeight:'bold',
    textAlign:'center',
    color:'#ffffff',
  },
});
