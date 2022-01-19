import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function Modal() {
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{flex: 1}}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
