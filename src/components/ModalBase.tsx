import React from "react";
import { Modal, View } from "react-native";

export interface ModalProps {
  visible: boolean;
  onClosed: () => void;
  children: React.ReactNode;
}
export const ModalBase = ({ visible, onClosed, children }: ModalProps) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClosed}
  >
    <View className="flex-1 items-center justify-center">
      <View
        style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          flexDirection: "row",
        }}
      >
        {children}
      </View>
    </View>
  </Modal>
);
