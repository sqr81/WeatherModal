import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Index() {

  return (
    <View style={styles.container}>
      <Text>Hello Baroudeur</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E7DE',
  },
});