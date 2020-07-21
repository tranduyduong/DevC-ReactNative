import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function () {
  const [currentCurrency, setCurrentCurrency] = React.useState("");
  const [convertedValue, setConvertedValue] = useState(0);
  const convertCurrency = () => {
    setConvertedValue(currentCurrency * 23000);
  };
  useEffect(convertCurrency);
  return (
    <View style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>

      <TextInput
        autoFocus={true}
        textAlign="center"
        placeholder="100,000,000 VND"
        selectionColor="red"
        keyboardType="number-pad"
        onChangeText={setCurrentCurrency}
        value={currentCurrency}
        style={{
          height: 60,
          padding: 5,
          width: 300,
          fontSize: 35,
          borderWidth: 1,
          borderColor: "lightblue",
          textAlign: "center",
        }}
      />
      <ConversionTypeButton to="usd" from="vn" />
      <ConversionTypeButton to="vn" from="usd" />
      <Currency current={currentCurrency} conversion={convertedValue} />
    </View>
  );
}

const ConversionTypeButton = ({ to, from }) => {
  const fromFlag = from === "usd" ? "🇺🇲" : "🇻🇳";
  const toFlag = to === "usd" ? "🇺🇲" : "🇻🇳";
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{`${fromFlag} to ${toFlag}`}</Text>
    </TouchableOpacity>
  );
};

const Currency = ({ current, conversion }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>Current currency:</Text>
      <Text style={styles.currencyText}>{current || "0.00"}</Text>
      <Text>Conversion currency:</Text>
      <Text style={styles.currencyText}>{conversion || "0.00"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "lightblue",
    justifyContent: "center",
  },
  currencyText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
});
