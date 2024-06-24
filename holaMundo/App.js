import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
        <Text style={styles.countText}>Prueba scroll</Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#FF00FF",
    fontSize: 18,
  },
  scrollView: {
    width: Dimensions.get("window").width,
  },
});
