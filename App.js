import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import useLocation from "./src/hooks/useLocation"
import ShowModal from './src/components/modal/Index';

export default function App() {
  // hook
  const {isAuthorized, isLoading, coordonnates} = useLocation();

  //1-récup coord user

 
  //2- realiser une requete vers les serveurs

  //city

  //meteo du moment

  //previsions

  //Chargement 
  if(isLoading){
    return (
      <View style={styles.container}>
      <ShowModal /> 
        <Text style={styles.text}>Chargement...</Text>
      </View>
    );
  }

  //autorisation accès
  if(isAuthorized === false){
    return (
      <View style={styles.container}>
      <ShowModal /> 
        <Text style={styles.text}>Vous devez nous donner accès a votre localisation.</Text>
      </View>
    );
  }

  //erreur
  if(!coordonnates){
    return (
      <View style={styles.container}>
        <ShowModal />      
        <Text style={styles.text}>Error...</Text>
      </View>
    );
  }
 
  //affichage coordonnees
  return (
    <View style={styles.container}>
      <ShowModal />  
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
