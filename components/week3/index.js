import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ConversionButton from "./week3_components/ConversionButton";
import CurrencyResult from "./week3_components/CurrencyResult";
import { connect } from "react-redux";
import fetchData from "./action";
const Week3 = function (props) {
  const [currentCurrency, setCurrency] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState("usd");
  const [fromCurrency, setFromCurrency] = useState("vnd");

  // React.useEffect(() => {
  //   // Simulating async call
  //   setTimeout(() => {
  //     console.log("abcdef");
  //     props.fetchData().then((res) => console.log("xxx", res));
  //   }, 1500);
  // }, []);
  // console.log("props", props);
  const updateCurrency = (text) => {
    setCurrency(text);
  };
  const convertCurrency = () => {
    let value;
    if (fromCurrency === "vnd") {
      value = currentCurrency / 23000;
    } else {
      value = 23000 * currentCurrency;
    }
    setConvertedCurrency(value);
  };
  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };

  useEffect(convertCurrency);

  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        onChangeText={(text) => updateCurrency(text)}
        textAlign="center"
        placeholder="1,000,000VND"
        selectionColor="red"
        autoFocus={true}
        keyboardType="number-pad"
        style={styles.textInput}
      />
      <ConversionButton
        from="vnd"
        to="usd"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <ConversionButton
        from="usd"
        to="vnd"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <CurrencyResult
        from={fromCurrency}
        to={toCurrency}
        current={currentCurrency}
        converted={convertedCurrency}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: "lightblue",
  },
});

const mapState = (state) => ({
  week3: state.week3,
});
const mapDispatch = (dispatch) => ({
  fetchData: async () => await dispatch(fetchData()),
});

export default connect(mapState, mapDispatch)(Week3);
