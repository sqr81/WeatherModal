import React from "react";
import { PermissionsAndroid } from "react-native";

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Permission de localisation",
        message: "Baroudeur a besoin de votre position.",
        buttonNeutral: "Demandez plus tard",
        buttonNegative: "Non",
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