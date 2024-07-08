import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Prueba() {
  const [modal, setModal] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal visible={modal} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <TouchableOpacity>
            {/*Botón que va a cerrar el modal */}
            <FontAwesome5 name="bacon" size={width * 0.1} color="#fff" />
          </TouchableOpacity>
        </View>
      </Modal>

      {/*Botón para abrir modal */}
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={{
          width: width * 0.5,
          height: height * 0.5,
          backgroundColor: "#0088f0",
          borderRadius: width * 0.1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: width * 0.04,
            fontWeight: "900",
            color: "#fff",
          }}
        >
          Abrir modal{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
