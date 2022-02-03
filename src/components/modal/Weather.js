import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export default function Weather({ forecast }) {
  return (
    <View style={styles.containerOneForecast}>
      <Text>{forecast.name}</Text>
      <Text style={styles.subDay}>{forecast.hour} h</Text>
      <Image source={{ uri: getIcon(forecast?.icon) }} style={styles.image} />
      <Text style={styles.temperature}>{forecast.temp} °C</Text>
    </View>
  );
}

const styles = StyleSheet.create({

      containerOneForecast: {
        width: "75%",
        height: "85%",
        backgroundColor: "#008891",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        margin:20,
      },
      image: {
        width: 50,
        height: 50,
    },

    subDay: {
        fontSize: 20,
        color: "#ffffff",
    },

    temperature: {
        fontSize: 20,
        color: "#ffffff",
    },
});
