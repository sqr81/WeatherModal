import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

export default function ShowModal({ data }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const animationIn = "fadeIn"
  const animationInTiming = 600
  const animationOut = "fadeOut"
  const animationOutTiming = 600

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  

  return (
    <>
      <View style={styles.buttonOpen}>
        <TouchableOpacity onPress={toggleModal}>
          <ImageBackground
            style={styles.buttonImage}
            source={require("../../../assets/ciel-clair.png")}
            style={{}}
          >
            <Text style={styles.title}></Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View>
        <Modal style={styles.weatherContainer} isVisible={isModalVisible} animationIn={animationIn} animationInTiming={animationInTiming} animationOut={animationOut} animationOutTiming={animationOutTiming}>
          <View style={styles.currentWeatherContent}>
            <CurrentWeather data={data} />
          </View>
          <View style={styles.forecastWeatherContent}>
            <ForecastWeather data={data} />
          </View>
          
          <TouchableOpacity style={styles.buttonClose} onPress={toggleModal} >
            <Text style={styles.buttonCloseText}> X </Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    padding: 20,
  },

  buttonClose: {
    position: "absolute",
    right: "1%",
    top: "5%",
    backgroundColor: "#E7E7DE",
  },

  buttonCloseText: {
    color: "black",
    fontSize:20,
  },

  buttonOpen: {
    position: "absolute",
    top: "5%",
    right: "20%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: -30,
    width: 50,
    height: 50,
  },

  currentWeatherContent: {
    width: "75%",
    height: "55%",
    position: "absolute",
    top: "5%",
    color: "#FFFFFF",
    backgroundColor: "#00587A",
    borderRadius: 12,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    textAlign: "center",
  },

  forecastWeatherContent: {
    width: "75%",
    height: "40%",
    position: "absolute",
    bottom: "0%",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    textAlign: "center",
    marginTop: "-15%",
    //backgroundColor:'green',
    //justifyContent:'space-between',
  },

  weatherContainer: {
    width: "70%",
    height: "70%",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "20%",
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: "#E7E7DE",
    alignItems: "center",

  },
});
