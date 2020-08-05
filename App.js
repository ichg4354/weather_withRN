import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import Axios from "axios";
import Weather from "./Weather";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=637e731e42ecbb0de6b1e1bb502f3c32&units=metric`;
    const file = await Axios.get(link);
    const temp = file.data.main.temp;
    const condition = file.data.weather[0].main;
    this.setState({ isLoading: false, temp: temp, condition: condition });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
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
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} />
    );
  }
}

export default App;
