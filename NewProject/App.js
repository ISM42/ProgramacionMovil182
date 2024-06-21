import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ImageBackground,
  Dimensions, // Necesario para obtener las dimensiones de la pantalla
} from "react-native";

const image = require("./images/f2.png");
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const Guardar = () => {
    if (nombre === "" || email === "" || password === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setNombre("");
    setEmail("");
    setPassword("");
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{ width: screenWidth, height: screenHeight }}
    >
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
            placeholder="Ingrese su nombre"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Ingrese su email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Ingrese su contraseña"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={Guardar}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Formulario Enviado</Text>
              <Text>Nombre: {nombre}</Text>
              <Text>Email: {email}</Text>
              <Text>Contraseña: {password}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // Fondo transparente para que el card sobresalga
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  formCard: {
    width: "90%", // Ajusta el ancho del card según tus necesidades
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo del card con opacidad
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
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "green",
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
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default FormularioRegistro;
