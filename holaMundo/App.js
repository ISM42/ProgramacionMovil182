import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"; //importar el uso de estado
import { StyleSheet, Text, View, Button } from "react-native";

//función donde creamos nuestro componente
const Texto = ({ estilo }) => {
  const [contenido, setContenido] = useState("holaMundo");
  const actualizarContenido = () => {
    setContenido("State actualizó este texto");
  };
  return (
    <Text style={[styles.text, estilo]} onPress={actualizarContenido}>
      {contenido}
    </Text>
  );
};

const Boton = () => {
  const [contenido, setContenido] = useState("Presioname");
  const actualizarContenido = () => {
    setContenido("State actualizó este boton");
  };
  return (
    <Button title={contenido} color="#000000" onPress={actualizarContenido}>
      {contenido}
    </Button>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto estilo={styles.red} />
      <Texto estilo={styles.green} />
      <Texto estilo={styles.blue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "#fff",
    alignItems: "center", //tiene diferentes propiedades. El predeterminado es "center" (izquiera a derecha)
    justifyContent: "space-around", //tiene diferentes propiedades. El predeterminado es "center" (arriba a abajo)
  },

  text: {
    color: "yellow",
    fontSize: 25,
    //height: 150,
    // width: 150,
  },

  red: { backgroundColor: "red" /*flex: 1*/ },
  green: { backgroundColor: "green" /*flex: 2*/ },
  blue: { backgroundColor: "blue" /*flex: 3*/ },
});
