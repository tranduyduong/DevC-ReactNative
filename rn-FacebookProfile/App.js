import React from 'react';
import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';

import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

// 5. Basic information
// 6. Hobbies

const userData = {
  fullName: "Loi V Tran",
  coverPhotoUrl: "https://bit.ly/2QpySf3",
  avatarPhotoUrl: "https://bit.ly/2vtrsQs",
  bio:
    "On a journey to be the best version of myself for my community, friends, family, and self.",
  details: [
    {
      info: "Director of Ideas at ",
      value: "Worlds Greatest Todo App",
      type: "work"
    },
    { info: "Solutions Architect at ", value: "Stage", type: "work" },
    {
      info: "Lives in ",
      value: "Ho Chi Minh City, Vietnam",
      type: "current-location"
    },
    { info: "From ", value: "Jacksonville, Florida", type: "home" },
    { info: "Joined ", value: "November 2006", type: "joined" },
    { info: "Followed by ", value: "419 people", type: "followers" },
    { info: "Manages  ", value: "Stage", type: "manages" }
  ],
  hobbies: [
    "🍕 Eating",
    "🌏 Sightseeing",
    "🏸 Badminton",
    "🏈 American Football",
    "📚 Learning",
    "🎧 Listening to Music"
  ]
};

function getDetailIcon(type) {
  switch (type) {
    case "work":
      return "briefcase";
    case "current-location":
      return "map-marker";
    case "home":
      return "home";
    case "joined":
      return "clock-o";
    case "followers":
      return "eye";
    case "manages":
      return "flag";
    default:
      return "briefcase";
  }
}

function Hobbies() {
  return (
    <View style={styles.hobbyContainer}>
      {userData.hobbies.map(hobby => {
        return (
          <View key={hobby} style={styles.hobbyButton}>
            <Text style={styles.hobbyText}>{hobby}</Text>
          </View>
        );
      })}
    </View>
  );
}

function UserDetails() {
  return (
    <View style={styles.detailContainer}>
      {userData.details.map(detail => {
        return (
          <View key={detail.info} style={styles.detailItem}>
            <View style={{ minWidth: 30 }}>
              <FontAwesome
                size={20}
                color="lightgrey"
                name={getDetailIcon(detail.type)}
              />
            </View>
            <Text>{detail.info}</Text>
            <Text>{detail.value}</Text>
          </View>
        );
      })}
    </View>
  );
}

function UserActions() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.messageButton}>
        <FontAwesome name="camera" size={20} color="white" />
        <Text style={{ marginLeft: 10, color: "white", fontWeight: "bold" }}>
          Message
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.friendshipButton}>
        <FontAwesome name="user-plus" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.manageButton}>
        <FontAwesome name="ellipsis-h" size={20} color="black" />
      </TouchableOpacity>
    </View>
  )
}

function UserIntroduction() {
  return (
    <View style={styles.introContainer}>
      <Image
        style={styles.introCover}
        source={{ uri: userData.coverPhotoUrl }}
      />
      <Image
        style={styles.introAvatar}
        source={{ uri: userData.avatarPhotoUrl }}
      />
      <View style={styles.introTextContainer}>
        <Text style={styles.userName}>{userData.fullName}</Text>
        <Text style={styles.userBio}>{userData.bio}</Text>
      </View>
      <View style={styles.introTextContainer}></View>
    </View>
  )
}

function Header() {
  return (
    <View style={styles.headerContainer}>
      <FontAwesome name="chevron-left" size={20} color="black" />
      <Text style={styles.headerName}>{userData.fullName}</Text>
      <FontAwesome name="heart" size={20} color="black" />
    </View>
  )
}

export default function App() {
  return (
    <View style={[styles.container, { paddingTop: Constants.statusBarHeight }]}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView>
        <UserIntroduction />
        <UserActions />
        <UserDetails />
        <Hobbies />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "lightgrey"
  },
  headerName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  introContainer: {
    height: 500,
    paddingTop: 20,
    alignItems: "center"
  },
  introCover: {
    width: "90%",
    height: "45%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  introAvatar: {
    width: "55%",
    height: "50%",
    bottom: "30%",
    borderWidth: 5,
    borderRadius: 125,
    borderColor: "white",
    position: "absolute"
  },
  introTextContainer: {
    bottom: 40,
    paddingHorizontal: 10,
    position: "absolute",
    alignItems: "center"
  },
  userName: {
    fontSize: 30,
    fontWeight: "bold"
  },
  userBio: {
    fontSize: 20,
    color: "grey",
    textAlign: "center"
  },
  buttonContainer: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  messageButton: {
    flex: 4,
    margin: 6,
    height: "50%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00f",
    justifyContent: "center"
  },
  friendshipButton: {
    flex: 1,
    margin: 6,
    height: "50%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey"
  },
  manageButton: {
    flex: 1,
    margin: 6,
    height: "50%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey"
  },
  detailContainer: {
    padding: 10
  },
  detailItem: {
    margin: 5,
    flexDirection: "row"
  },
  hobbyContainer: {
    padding: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  hobbyButton: {
    margin: 7,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "lightgrey"
  },
  hobbyText: {
    fontSize: 20
  }
});
