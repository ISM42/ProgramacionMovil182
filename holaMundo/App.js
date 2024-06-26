import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            titulo: "Grupo A",
            data: [
              { key: 1, name: "Ivan Isay" },
              { key: 2, name: "Victor" },
              { key: 3, name: "Elias" },
              { key: 4, name: "Alan" },
            ],
          },
          {
            titulo: "Grupo B",
            data: [
              { key: 5, name: "Pablo" },
              { key: 6, name: "Lilian" },
              { key: 7, name: "Monse" },
              { key: 8, name: "José" },
            ],
          },
          {
            titulo: "Grupo C",
            data: [
              { key: 9, name: "Alberto" },
              { key: 10, name: "Mariana" },
              { key: 11, name: "Ricardo" },
              { key: 12, name: "Esteban" },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.titulo}</Text>
        )}
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
});
