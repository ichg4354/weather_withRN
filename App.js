import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import Axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=637e731e42ecbb0de6b1e1bb502f3c32`;
    const { data } = await Axios.get(link);
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      console.log(latitude, longitude);
      this.setState({ isLoading: false, lat: latitude, long: longitude });
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
      Alert.alert("GIVE ME UR DATA", "GIVE MEEE");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

export default App;
