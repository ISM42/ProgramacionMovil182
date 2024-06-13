import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"; //importar el uso de estado
import { StyleSheet, Text, View, Button } from "react-native";

//función donde creamos nuestro componente
const Texto = () => {
  const [contenido, setContenido] = useState("holaMundo");
  const actualizarContenido = () => {
    setContenido("State actualizó este texto");
  };
  return <Text onPress={actualizarContenido}>{contenido}</Text>;
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
      <Texto contenido={"Hola mundo"}></Texto>
      <Texto contenido={"ReactNative"} />

      <Boton></Boton>

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
});
