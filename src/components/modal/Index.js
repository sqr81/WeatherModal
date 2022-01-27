import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

export default function ShowModal() {
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
        <Modal style={styles.weatherContainer} isVisible={isModalVisible}>
          <View style={styles.currentWeatherContent}>
            <CurrentWeather />
          </View>
          <View style={styles.forecastWeatherContent}>
          <ForecastWeather />
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
 
  buttonClose: {
    position: "absolute",
    right: 50,
    top: 20,
    backgroundColor: "#E7E7DE",
    //marginHorizontal: -30,
    color: "#000000",
  },
  buttonOpen: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#E7E7DE",
    marginHorizontal: -30,
    color: "#000000",
  },
  
  currentWeatherContent: {
    width: '75%',
    height: '55%',
    position: 'absolute',
    top: '5%',
    color: "#FFFFFF",
    backgroundColor: "#00587A",
    borderRadius: 12,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    textAlign: "center",
  },

  forecastWeatherContent:{
    fontFamily: "Open Sans",
    fontStyle: "normal",
    textAlign: "center",
    backgroundColor: "#E7E7DE",
  },
  
  weatherContainer: {
    width: "100%",
    height: "100%",
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: "#E7E7DE",
    alignItems:'center'
  },

});
