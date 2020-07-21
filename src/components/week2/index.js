import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

const imgData = [
  { id: 1, imgSource: require("../../assets/1.jpeg") },
  { id: 2, imgSource: require("../../assets/1.jpeg") },
  { id: 3, imgSource: require("../../assets/1.jpeg") },
  { id: 4, imgSource: require("../../assets/1.jpeg") },
  { id: 5, imgSource: require("../../assets/1.jpeg") },
  { id: 6, imgSource: require("../../assets/1.jpeg") },
];
const centerImgData = Math.floor(imgData.length / 2);

export default function () {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Ionicons name="ios-arrow-round-back" size={50} color="black" />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Entypo name="dots-two-vertical" size={24} color="black" />
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Image
            style={styles.imgAvatar}
            source={require("../../assets/avatar.png")}
          />
        </View>
        <View style={styles.userDetail}>
          <View style={styles.fullName}>
            <Text style={styles.txtFullName}>Nguyen Van Ax</Text>
          </View>
          <View style={styles.jobTitle}>
            <Text style={styles.txtJobTitle}>Developer</Text>
          </View>
          <View style={styles.infoButtons}>
            <View style={styles.infoFollow}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Follow</Text>
            </View>
            <View style={styles.infoSend}>
              <MaterialIcons name="send" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "900" }}>220k</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Photos</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "900" }}>220k</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Followers</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "900" }}>220k</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            {imgData.slice(0, centerImgData).map((img, index) => (
              <Image key={index} source={img.imgSource} style={styles.image} />
            ))}
          </View>

          <View style={{}}>
            {imgData.slice(centerImgData).map((img, index) => (
              <Image key={index} source={img.imgSource} style={styles.image} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  info: {
    flex: 2,
    flexDirection: "row",
  },
  avatar: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imgAvatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  userDetail: {
    flex: 3,
  },
  fullName: {
    flex: 1,
  },
  txtFullName: {
    fontWeight: "900",
    fontSize: 21,
    color: "gray",
  },
  jobTitle: {
    flex: 1,
  },
  txtJobTitle: {
    fontSize: 15,
    color: "gray",
  },
  infoButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoFollow: {
    backgroundColor: FOLLOW_COLOR,
    width: 100,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  infoSend: {
    borderRadius: 20,
    backgroundColor: SEND_MESSAGE_COLOR,

    width: 50,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
  },
});
