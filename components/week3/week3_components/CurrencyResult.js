import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const CurrencyResult = props => {
    return (
        <View style={styles.container}>
            <Text styles={styles.text}>Current Currency:</Text>
            <Text styles={styles.currencyText}>0.00</Text>
            <Text styles={styles.text}>Conversion Currency:</Text>
            <Text sytles={styles.currencyText}>0.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    currencyText: {
        color: 'green',
        fontSize: 50,
        fontWeight: '400'
    }
  });

export default CurrencyResult;