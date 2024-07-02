// Import useState
import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomTextInput from "./CustomTextInput";

// Tambahkan searchWeather sebagai sebuah prop
const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState("");

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        // Tambahkan text dan onChange
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        {/* Jalankan function searchWeather dengan parameter location */}
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;
