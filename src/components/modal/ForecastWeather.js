import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { getCurrentPosition } from "react-native-geolocation-service";

import Weather from "./Weather";

export default function ForecastWeather({ data }) {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    //on refait un tableau pour mieux manipuler les datas
    const forecastsData = data.list.map((f) => {
      //la date de openweather n'est pas standard, on doit la modifier
      const dt = new Date(f.dt * 1000);
      return {
        date: dt,
        hour: dt.getHours(),
        temp: Math.round(f.main.temp),
        icon: f.weather[0].icon,
        name: format(dt, "EEEE", { locale: fr }),
      };
    });
    setForecasts(forecastsData);
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.containerDate}>
        <Image
          style={styles.direction}
          source={require("../../../assets/left.png")}
        ></Image>
        <Text style={styles.date}>date</Text>
        <Image
          style={styles.direction}
          source={require("../../../assets/right.png")}
        ></Image>
      </View>
      <View />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {forecasts.map((f) => (
          <View style={styles.containerThreeForecast}>
            <Weather forecast={f} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
/*

<View style={styles.containerThreeForecast}>
        <View style={styles.containerOneForecast}>
            <Text style={styles.subDay}>Matin</Text>
            <Image style={styles.image} source={require('../../../assets/ciel-clair.png')}></Image>
            <Text style={styles.temperature}>7°C</Text>
        </View>
        <View style={styles.containerOneForecast}>
            <Text style={styles.subDay}>Midi</Text>
            <Image style={styles.image} source={require('../../../assets/ciel-clair.png')}></Image>
            <Text style={styles.temperature}>7°C</Text>
        </View>
        <View style={styles.containerOneForecast}>
            <Text style={styles.subDay}>Soir</Text>
            <Image style={styles.image} source={require('../../../assets/ciel-clair.png')}></Image>
            <Text style={styles.temperature}>7°C</Text>
        </View>
    </View>
    */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  containerDate: {
    width: "100%",
    flexDirection: "row",
    marginVertical: "10%",

    justifyContent: "center",
  },

  containerThreeForecast: {
    
    height: "100%",
    //flexDirection: "row",
    //justifyContent: "space-between",
    backgroundColor:"#E7E7DE",
  },

  date: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },

  direction: {
    width: 40,
    height: 40,
  },

  scroll: {
    width: "100%",
    height: "100%",
    //textAlign: "center",
  },
});
