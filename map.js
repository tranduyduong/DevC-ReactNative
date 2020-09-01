import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Button
} from 'react-native'
import { createExample } from '../actions/Example'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// AIzaSyAhuvkbu8iQU3vptKQSbaHQNlTJv0ndTVw
const Map = () => {
  return (
    <SafeAreaView style={{ flex: 1, top: 20 }}>
      {/* <GooglePlacesAutocomplete
  placeholder='Enter Location'
  minLength={2}
  autoFocus={false}
  returnKeyType={'default'}
  fetchDetails={true}
  styles={{
    ccontainer: {
      position: 'absolute',
      top: 10,
      width: '100%',
    },
    textInputContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      height: 54,
      marginHorizontal: 20,
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    textInput: {
      height: 54,
      margin: 0,
      borderRadius: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      fontSize: 18,
    },
    listView: {
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff',
      marginHorizontal: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 15,
      marginTop: 10,
    },
    description: {
      fontSize: 16,
    },
    row: {
      padding: 20,
      height: 58,
    },
  }}
/> */}
      <View style={styles.edges}>
        <View style={styles.edges}>
          <MapView
            style={styles.map}
            provider='google'
            region={{
              latitude: 40.76727216,
              longitude: -73.99392888,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details)
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en'
        }}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return { ...state.example }
}

export default connect(mapStateToProps, { createExample })(Map)

const styles = StyleSheet.create({
  edges: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  searchBar: {
    position: 'absolute',
    left: 10,
    top: 50,
    right: 10,
    height: 50,
    zIndex: 1,
    backgroundColor: 'white'
  },
  map: {
    flex: 1
  }
})
