import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import useLocation from "./src/hooks/useLocation"
import CurrentWeather from './src/components/modal/CurrentWeather';

export default function App() {
  // hook
  const {isAuthorized, isLoading, coordonnates} = useLocation();

  //1-récup coord user

 
  //2- realiser une requete vers les serveurs

  //city

  //meteo du moment

  //previsions

  if(isLoading){
    return (
      <View style={styles.container}>
      <CurrentWeather />
        <Text style={styles.text}>Chargement...</Text>
      </View>
    );
  }

  if(isAuthorized === false){
    return (
      <View style={styles.container}>
      <CurrentWeather />
        <Text style={styles.text}>Vous devez nous donner accès a votre localisation.</Text>
      </View>
    );
  }

  if(!coordonnates){
    return (
      <View style={styles.container}>
      <CurrentWeather />
        <Text style={styles.text}>Error...</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
   <CurrentWeather />
      <Text>Les coordonnées sont lat: {coordonnates.latitude} long: {coordonnates.longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7DE',
    paddingHorizontal: 65,
  },
  text: {
    fontSize: 25,
  }
});
