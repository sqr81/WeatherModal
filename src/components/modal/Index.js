import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import CurrentWeather from './CurrentWeather';

export default function ShowModal() {
  
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E7E7DE',
  },
  
})