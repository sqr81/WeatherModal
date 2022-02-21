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
  const date = format(new Date(), "EEEE dd MMMM", { locale: fr });
  //donnees sur 5 jours
  const [fiveDaysData, setFiveDaysData] = useState(null);
  //état qui defini le jour actuel  et on le met sur 0
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    //on refait un tableau pour mieux manipuler les datas
    const transformedData = data.list.map((f) => {
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
    //recuperer les jours uniques
    const days = [...new Set(transformedData.map((data) => data.name))];
    //
    const dataForDays = [];
    //filtrer les jours qui ont le même nom
    days.forEach((day) => {
      const array = transformedData.filter((data) => data.name === day);
      dataForDays.push({
        day,
        data: array,
      });
    });

    setFiveDaysData(dataForDays);
  }, [data]);

  //jours suivants
  const nextDay = () => {
    if (!fiveDaysData) return;
    // Si on demande le jour 6
    if (currentPosition + 1 <= fiveDaysData.length - 1) {
      setCurrentPosition((currentPosition) => currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };
  //jours précédents
  const previousDay = () => {
    if (!fiveDaysData) return;
    // Si on demande le jour 6
    if (currentPosition - 1 > 0) {
      setCurrentPosition((currentPosition) => currentPosition - 1);
    } else {
      setCurrentPosition(fiveDaysData.length - 1);
    }
  };

  if (!fiveDaysData) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerDate}>
        <TouchableOpacity onPress={previousDay}>
          <Image
            style={styles.direction}
            source={require("../../../assets/left.png")}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.date}>{fiveDaysData[currentPosition].day}</Text>

        <TouchableOpacity onPress={nextDay}>
          <Image
            style={styles.direction}
            source={require("../../../assets/right.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.containerThreeForecast}>
        <FlatList
          data={fiveDaysData[currentPosition].data}
          horizontal
          renderItem={({ item }) => (
            <Weather hour={item.hour} temp={item.temp} icon={item.icon} />
          )}
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
    display: "flex",
    flexDirection: "row",
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
