import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import * as Location from 'react-native-geolocation-service';
import axios from "axios"

import useCurrentLocationWeather from "./src/hooks/useCurrentLocationWeather";
import ShowModal from './src/components/modal/Index';

// !!!! cle api a mettre dans un.env !!!!
const API_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4cc88603d49534dcc69aa72ce918bad6&lang=fr&units=metric`

export default function App() {
  // hook récup coord user
  const {isAuthorized, isLoading, error, data} = useCurrentLocationWeather();

  //previsions
  const getWeather = async (location) => {
    try {
      const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude))
      setData(response.data)
      setIsLoading(false)
      
    } catch(e) {
      console.log("Erreur dans getWeather")
    }
  }
  //Chargement 
  if(isLoading){
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.activityIndicator}/> 
      </View>
    );
  }
  //si pas autorisation enlever loading
  //autorisation accès
  if(isAuthorized === false){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Vous devez nous donner accès a votre localisation.</Text>
      </View>
    );
  }

  //erreur
  if(error){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error...</Text>
      </View>
    );
  }
 
  //affichage ville
  return (
    <View style={styles.container}>
      <Text>{data?.city?.name}</Text>
      <ShowModal data={data}/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7DE',
    paddingHorizontal: 65,
  },

  activityIndicator:{
    justifyContent:'center',
    alignItems:'center',
  },
});
