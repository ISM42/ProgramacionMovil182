import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 1, name: "Ivan Isay" },
          { key: 2, name: "Victor" },
          { key: 3, name: "Elias" },
          { key: 4, name: "Alan" },
          { key: 5, name: "Pablo" },
          { key: 6, name: "Lilian" },
          { key: 7, name: "Monse" },
          { key: 8, name: "Monse" },
          { key: 9, name: "Monse" },
          { key: 10, name: "Monse" },
          { key: 11, name: "Monse" },
          { key: 12, name: "Monse" },
          { key: 13, name: "Monse" },
          { key: 14, name: "Monse" },
          { key: 15, name: "Monse" },
          { key: 16, name: "Monse" },
          { key: 17, name: "Monse" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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
});
