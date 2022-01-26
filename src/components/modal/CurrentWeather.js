import React  from 'react';

import { Text, View, StyleSheet } from 'react-native';

export default function CurrentWeather() {

  return (
    <>   
      <View>    
        <Text style={styles.city}>Castiglione</Text>
        <Text style={styles.aujourdhui}>Aujourd'hui</Text>
        <Text style={styles.temperature}>7°C</Text>
        <Text style={styles.weatherType}>éclaircie</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  aujourdhui:{
    fontSize: 20 , 
    textAlign:'center', 
    color:'#ffffff',
    position:'relative',
    top:-80,
  },
  
  city:{
    position:'relative',
    top:-90,
    fontSize: 30,
    color:'#ffffff',
  },
  
  temperature:{
    fontSize: 60, 
    fontWeight:'bold', 
    textAlign:'center',
    color:'#ffffff',
  },
  weatherType:{
    fontSize: 20, 
    fontWeight:'bold',
     textAlign:'center',
     color:'#ffffff',
  },
});
