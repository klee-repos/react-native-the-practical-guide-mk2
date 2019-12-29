import React from "react";
import { StyleSheet, View } from "react-native";

import Headers from "./components/Headers";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Headers title="Guess a number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
