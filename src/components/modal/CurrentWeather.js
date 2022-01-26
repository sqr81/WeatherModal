import React, { useState } from 'react';

import { Button, Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function CurrentWeather() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.buttonOpen}>
        <Button title=" X " onPress={toggleModal} />
      </View>
      <View>
        <Modal style={styles.currentWeatherContainer} isVisible={isModalVisible}>
          <View style={styles.currentWeatherContent}>
            <Text style={styles.city}>Castiglione</Text>
            <Text style={styles.aujourdhui}>Aujourd'hui</Text>
            <Text style={styles.temperature}>7°C</Text>
            <Text style={styles.weatherType}>éclaircie</Text>
          </View>
          <View style={styles.buttonClose}>
          <Button title="X" onPress={toggleModal} />
          </View>
        </Modal>
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
  buttonClose: {
    position:'absolute',
    right:-10,
    top: -20,
    backgroundColor: '#E7E7DE',
    //marginHorizontal: -30,
    color: '#000000',
  },
  buttonOpen: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#E7E7DE',
    marginHorizontal: -30,
    color: '#000000',
  },
  city:{
    position:'relative',
    top:-90,
    fontSize: 30,
    color:'#ffffff',
  },
  currentWeatherContainer: {
    position:'absolute',
    width: '75%',
    height: '55%',
    marginHorizontal: 50,
    alignItems: 'center',
    borderRadius: 8,
    top: 24,
    backgroundColor: '#00587A',
  },
  currentWeatherContent:{
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    textAlign:'center',
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
