import React from 'react'
import { 
  View, 
  Text,
  Image,
  StyleSheet,
} from 'react-native'

const Description = () => {
  return (
    <View 
      style={{ 
        margin: 10,
        height: 100, 
        padding: 10,
        width: '90%',
        borderWidth: 3, 
        borderColor: 'red', 
      }}
    >
      <Text style={styles.labelStyle}>Description</Text>
      <Text>I like writing code 💻 and building mobile apps 📲</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <Text  style={styles.helloStyle}>
        Hello World!
      </Text>
      <Image
        style={styles.imageStyle}
        source={{uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/14633014_10154745913714359_6100717154322258576_n.jpg?_nc_cat=105&_nc_oc=AQkZMdfzPzbxiGhHk7rKdxZuqxfru6om8cUXLPi4elQn9yH-qtyHT1jMm8_wF2g-kp8&_nc_ht=scontent.fsgn2-1.fna&oh=0a07f00a2483ba1090d5010e8cd1eb64&oe=5DC1478A'}}
      />
      <View style={styles.singleHorizontalRowStyle}>
        <Text style={styles.labelStyle}>
          Name:
        </Text>
        <Text style={styles.infoStyle}>
          Loi Tran
        </Text>
        <Text style={styles.labelStyle}>
          Age: 
        </Text>
        <Text style={styles.infoStyle}>
          18
        </Text>
      </View>
      <Text style={styles.labelStyle}>
        Birthday:
      </Text>
      <Text style={styles.infoStyle}>
        July 22th, 2000
      </Text>
      <Text style={styles.labelStyle}>
        Location
      </Text>
      <Text style={styles.infoStyle}>
        Ho Chi Minh City, Vietnam
      </Text>
      <Description />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  helloStyle: {
    fontSize: 40,
    color: 'green',
    marginBottom: 50,
    fontWeight: 'bold',
  },
  singleHorizontalRowStyle: { 
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  labelStyle: { 
    fontSize: 35,
    color: 'grey' 
  },
  infoStyle: {
    fontSize: 30
  },
  imageStyle: {
    width: 250, 
    height: 250,
    borderWidth: 5,
    borderRadius: 125,
    borderColor: 'green'
  }
})
