import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export default function Weather({ forecast }) {
  return (
    <View style={styles.containerOneForecast}>
      <Text style={styles.name}>{forecast.name}</Text>
      <Text style={styles.hour}>{forecast.hour} h</Text>
      <Image source={{ uri: getIcon(forecast?.icon) }} style={styles.image} />
      <Text style={styles.temperature}>{forecast.temp} °C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOneForecast: {
    width: 85,
    height: "100%",
    backgroundColor: "#008891",
    borderRadius: 12,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
  },

  name:{
    fontSize: 16,
    color: "#ffffff",
  },

  hour: {
    fontSize: 16,
    color: "#ffffff",
  },

  temperature: {
    fontSize: 16,
    color: "#ffffff",
  },
});
