import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ConversionButton = ({
  to,
  from,
  toCurrency,
  fromCurrency,
  setConversionCurrencies
}) => {
  const isSelectedConversionType = fromCurrency === from && toCurrency === to;
  const backgroundColor = isSelectedConversionType ? 'lightblue' : null;
  const conditionalButtonStyle = { backgroundColor };

  const fromFlag = from === 'usd' ? '🇺🇸' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇸' : '🇻🇳';

  return (
    <TouchableOpacity
      style={[styles.button, conditionalButtonStyle]}
      onPress={() => setConversionCurrencies(from, to)}
    >
      <Text style={styles.buttonText}>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
};

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
