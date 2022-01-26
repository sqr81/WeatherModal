import React from "react";
import { PermissionsAndroid } from "react-native";

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Baroudeur needs access to your location.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );console.log(granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
        return false;
    }
  } catch (err) {
    return false;
}
};