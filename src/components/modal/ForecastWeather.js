import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { getCurrentPosition } from "react-native-geolocation-service";

import Weather from "./Weather";

export default function ForecastWeather({ data }) {
  const [forecasts, setForecasts] = useState([]);
  const date = format(new Date(), "EEEE dd MMMM", { locale: fr });

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
        <Text style={styles.date}>{date}</Text>
        <Image
          style={styles.direction}
          source={require("../../../assets/right.png")}
        ></Image>
      </View>
      <View />

    
        <View  style={styles.containerThreeForecast}>
          <FlatList horizontal
            data={forecasts}
            //keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Weather forecast={item} />}
          />
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0%",
  },

  containerDate: {
    width: "100%",
    flexDirection: "row",
    marginVertical: "2%",
    justifyContent: "center",
  },

  containerThreeForecast: {
    height: "85%",
    alignContent: "space-between",
  },

  date: {
    fontSize: 20,
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
  },
});
