import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ConversionButton from './week3_components/ConversionButton'
import CurrencyResult from './week3_components/CurrencyResult'

export default function () {
  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput 
        textAlign="center" 
        placeholder="1,000,000VND"
        selectionColor="red"
        autoFocus={true} 
        keyboardType="number-pad" 
        style={styles.textInput}/>
      <ConversionButton from="vnd" to="usd"/>  
      <ConversionButton from="usd" to="vnd"/>
      <CurrencyResult />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue'
  }
});