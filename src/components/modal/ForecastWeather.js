import React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import { getCurrentPosition } from 'react-native-geolocation-service';

export default function ForecastWeather(){
    return (
    <>
    <View style={styles.containerDate}>
        <Image style={styles.direction} source={require('../../../assets/left.png')}></Image>
        <Text style ={styles.date}>Jeudi 26 janvier</Text>
        <Image style={styles.direction} source={require('../../../assets/right.png')}></Image>
    </View>
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
    </>
    );
}

const styles = StyleSheet.create({
    containerDate:{
        width:'100%',
        flexDirection:'row',
        marginVertical: '10%',
    },

    containerOneForecast:{
        width: '25%',
        backgroundColor: '#008891',
        borderRadius: 12,
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop: 20,
        paddingBottom: 20,
    },

    containerThreeForecast:{
        width:'100%',
        height: '50%',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    date:{
        fontSize: 30, 
        fontWeight:'bold',
        textAlign:'center',
        color:'#000000',
    },

    direction:{
        width: 40,
        height: 40,
    },
    
    image:{
        width: 50,
        height: 50,
    },

    subDay:{
        fontSize: 20,
        color: '#ffffff',
    },

    temperature:{
        fontSize: 20,
        color: '#ffffff',
    },
})