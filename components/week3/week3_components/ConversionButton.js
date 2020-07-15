import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ConversionButton = props => {
    const fromFlag = props.from === 'usd' ? '🇺🇲' : '🇻🇳';
    const toFlag = props.to === 'usd' ? '🇺🇲' : '🇻🇳';
    return (
        <TouchableOpacity style={styles.button}>
            <Text>{fromFlag} to {toFlag}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      height: 35,
      width: 200,
      margin: 10,
      borderWidth: 2,
      borderRadius: 20,
      alignItems: 'center',
      borderColor: 'lightblue',
      justifyContent: 'center'
    }
  });

export default ConversionButton;
