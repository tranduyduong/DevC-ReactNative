import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import FormatedCurrency from './FormatedCurrency'

const CurrencyResult = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Current Currency:</Text>
            <FormatedCurrency
            type={props.from}
            value={props.current}
            />
            {/* <Text style={styles.currencyText}>{props.current}</Text> */}
            <Text style={styles.text}>Conversion Currency:</Text>
            <FormatedCurrency
            type={props.to}
            value={props.converted}
            />
            {/* <Text style={styles.currencyText}>{props.converted}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        fontStyle: 'italic'
    },
  });

export default CurrencyResult;