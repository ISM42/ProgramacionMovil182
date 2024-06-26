import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [user, setUser] = useState([]); //definir y asignar usuarios
  const [loading, setLoading] = useState(true); //definir los estados de carga de la información del usuario (simuulación de la carga)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //cargar usuarios
      .then((response) => response.json()) //convertilo a json
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "strech",
    justifyContent: "center",
    paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: "blue",
    borderBottomWidth: 1,
  },
  sectionHeader: {
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
  },
  center: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
