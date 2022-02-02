import React, { useState } from "react";
import { Button, Text, View, StyleSheet,TouchableOpacity,ImageBackground, } from "react-native";
import Modal from "react-native-modal";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

export default function ShowModal({ data }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <View style={styles.buttonOpen}>
        <TouchableOpacity onPress={toggleModal}>
          <ImageBackground style={styles.buttonImage} source={require("../../../assets/ciel-clair.png")} style={{}}>
            <Text style={styles.title}></Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>  
      <View>
        <Modal style={styles.weatherContainer} isVisible={isModalVisible}>
          <View style={styles.currentWeatherContent}>
          <CurrentWeather data={data} />
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 24,
    padding: 20,
  },

  buttonClose: {
    position: "absolute",
    right: '5%',
    top: '5%',
    backgroundColor: "red",
    color: "#ffffff",
  },

  buttonOpen: {
    position: "absolute",
    top: '5%',
    right: '20%',
    flexDirection: "row",
    justifyContent: "flex-end",   
    marginHorizontal: -30,
    width:50,
    height: 50,
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
    width: '75%',
    height: '55%',
    position: 'absolute',
    top: '65%',
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
    paddingVertical: '10%',
    backgroundColor: "#E7E7DE",
    alignItems:'center'
  },

});
