import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { isSameDay } from "date-fns";

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function CurrentWeather({ data }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    //tableau de previsions par ordre croissant
    const currentW = data.list.filter((forecast) => {
      const today = new Date().getTime() + Math.abs(data.city.timezone * 1000);
      const forecastDate = new Date(forecast.dt * 1000);
      return isSameDay(today, forecastDate);
    });
    //on recupere le 1er element
    setCurrentWeather(currentW[0]);
  }, [data]);

  return (
    <>
      <View style={styles.container}>
        <Text>{data?.city?.name}</Text>
        <Text>{data?.city?.name}</Text>
        <Text>Aujourd'hui</Text>
        <Text>{Math.round(currentWeather?.main.temp)}°C</Text>
        <Text>{currentWeather?.weather[0].description}°C</Text>

        <Text style={styles.city}>Castiglione</Text>
        <Text style={styles.aujourdhui}>Aujourd'hui</Text>
        <Image
          style={styles.image}
          source={{ uri: getIcon(currentWeather?.weather[0].icon) }}
        ></Image>
        <Text style={styles.temperature}>7°C</Text>
        <Text>{Math.round(data?.list[0]?.main.temp)}°C</Text>
        <Text style={styles.weatherType}>{currentWeather?.weather[0].description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  aujourdhui: {
    position: "relative",
    top: "10%",
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },

  city: {
    position: "relative",
    top: "5%",
    fontSize: 30,
    color: "#ffffff",
    textAlign: "center",
  },

  container: {
    backgroundColor: "#00587A",
    alignItems: "center",
    borderRadius: 12,
    paddingBottom: "50%",
  },

  image: {
    width: 100,
    height: 100,
    position: "relative",
    top: "20%",
  },

  temperature: {
    position: "relative",
    top: "30%",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },

  weatherType: {
    position: "relative",
    top: "30%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
});
