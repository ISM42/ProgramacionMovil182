import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import { View, Text, Modal, TouchableOpacity, Dimensions } from "react-native";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  bottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const { width, height } = Dimensions.get("window");

export default function Prueba() {
  const [modal, setModal] = useState(false);
  const BottomSheetModalRef = useRef(null);
  const hey = () => {
    BottomSheetModalRef?.current.present();
  };
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        name="fercho"
        ref="bottomSheetModalRef"
        snapPoints={[height * 0.4, height * 0.6, height * 0.9]}
      >
        <Text>Hola mundo. Esta es una prueba del bottom</Text>
      </BottomSheetModal>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity>
          <Text>HOLA</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModalProvider>
  );
}
