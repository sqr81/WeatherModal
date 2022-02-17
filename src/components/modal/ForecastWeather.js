import React, { useEffect, useState } from "react";
import { format, previousDay } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getCurrentPosition } from "react-native-geolocation-service";
import Weather from "./Weather";

export default function ForecastWeather({ data }) {
  const [forecasts, setForecasts] = useState(null);
  const date = format(new Date(), "EEEE dd MMMM", { locale: fr });
  //donnees sur 5 jours
  const [forecastsData, setForecastsData] = useState(null);
  //état qui defini le jour actuel  et on le met sur 0
  const [currentPosition, setCurrentPosition] = useState(0);

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
    //console.log(forecastsData[currentPosition+3].name)
    console.log(forecastsData[0].name);
  }, [data]);

  //jour suivant
  const nextDay = () => {
    // Si on demande le jour 6
    if (forecastsData && currentPosition + 1 <= forecastsData.length - 1) {
      setCurrentPosition((currentPosition) => currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerDate}>
        <TouchableOpacity>
          <Image
            style={styles.direction}
            source={require("../../../assets/left.png")}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.date} onPress={nextDay}>
          {date}
        </Text>
        <Text>
          {forecastsData ? forecastsData[currentPosition].name : null}
        </Text>
        
        <TouchableOpacity onPress={nextDay}>
          <Image
            style={styles.direction}
            source={require("../../../assets/right.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View />

      <View
        style={styles.containerThreeForecast}
        forecasts={(forecasts) => {
          setForecasts(forecasts);
        }}
      >
      {forecastsData ? <FlatList horizontal data={forecastsData[currentPosition]} renderItem={( item ) => <Weather forecast={item} />} /> : null}
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
