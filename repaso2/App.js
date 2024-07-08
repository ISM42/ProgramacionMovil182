import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet,
  StatusBar,
  FlatList,
  Modal,
} from "react-native";
import Prueba from "./screens/prueba";

export default function App() {
  const image = require("./assets/peli.png");
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showNoResultsAlert, setShowNoResultsAlert] = useState(false);

  const data = [
    { id: "1", name: "Rojo Amanecer" },
    { id: "2", name: "La Otra Conquista" },
    { id: "3", name: "Apocalypto" },
    { id: "4", name: "La Pasión de Cristo" },
    { id: "5", name: "Chicas Pesadas" },
    { id: "6", name: "El Conjuro 2" },
    { id: "7", name: "El Conjuro 1" },
    { id: "8", name: "Alcanzar el Cielo" },
    { id: "9", name: "Karate Kid 4" },
    { id: "10", name: "Contacto Sangriento" },
    { id: "11", name: "Dumbo" },
    { id: "12", name: "Alguien Tiene Que Ceder" },
    { id: "13", name: "El Pianista" },
    { id: "14", name: "Mulan" },
    { id: "15", name: "Tierra de Osos" },
  ];

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(true);

    if (results.length === 0 && searchQuery.trim() !== "") {
      setShowNoResultsAlert(true);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const hideAlert = () => {
    setShowNoResultsAlert(false);
  };

  return <Prueba />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formCard: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "blue",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  button: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    maxWidth: 300,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textTítulo: {
    fontSize: 40,
    color: "white",
    paddingBottom: 40,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    width: "90%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Arial nova",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  flatlistContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  alertButton: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
    marginTop: 10,
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
  },
});
