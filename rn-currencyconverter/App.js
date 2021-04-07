import React, { useState, useEffect } from 'react';
import { 
  Text,
  View,
  TextInput,
  StyleSheet, 
  TouchableOpacity,
} from 'react-native';

const FormattedCurrency = (props) => {
  const currencyType = props.type === 'usd' ? '🇺🇸 USD' : '🇻🇳 VND';

  const formatter = new Intl.NumberFormat(props.type, {
    currency: props.type,
    style: 'currency',
  });

  const formattedCurrency = `${formatter.format(props.value)} ${currencyType}`;

  return (
    <Text style={styles.currencyText}>
      {formattedCurrency}
    </Text>
  );
};

const ConversionTypeButton = (props) => {
  const backgroundColor = props.fromCurrency === props.from && props.toCurrency === props.to ? 'lightblue' : null;
  const buttonStyle = { backgroundColor: backgroundColor };

  const fromFlag = props.from === 'usd' ? '🇺🇸 USD' : '🇻🇳 VND';
  const toFlag = props.to === 'usd' ? '🇺🇸 USD' : '🇻🇳 VND';

  return (
    <TouchableOpacity
      onPress={() => props.setConversionCurrencies(props.from, props.to)}
      style={[styles.button, buttonStyle]}
    >
      <Text style={styles.buttonText}>{fromFlag} to {toFlag}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [fromCurrency, setFromCurrency] = useState('vnd');
  const [toCurrency, setToCurrency] = useState('usd');
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);

  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'vnd') {
      value = currentCurrencyValue / 23000;
    } else {
      value =  23000 * currentCurrencyValue;
    };
    setConvertedValue(value);
  };

  useEffect(convertCurrency);

  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>
        Please enter the value of the currency you want to convert
      </Text>
      <TextInput
        autoFocus
        textAlign="center"
        selectionColor="red"
        keyboardType="number-pad"
        style={styles.inputStyle}
        placeholder="100,000,000 VND"
        onChangeText={setFromCurrencyValue}
      />
      <ConversionTypeButton 
        to="usd"
        from="vnd"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <ConversionTypeButton
        to="vnd"
        from="usd"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <Text>
        Current currency:
      </Text>
      <FormattedCurrency
        type={fromCurrency}
        value={currentCurrencyValue}
      />
      <Text>
        Conversion currenecy:
      </Text>
      <FormattedCurrency 
        type={toCurrency}
        value={convertedCurrencyValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',	
    alignItems: 'center',	
    justifyContent: 'flex-start',
  },
  prompt: {
    margin: 20,
    fontSize: 20,
  },
  button: {
    height: 35, 
    width: 200, 
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  },
  inputStyle: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue'
  }
});
