import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import React from "react";

interface ButtonProps {
  textBtn: string;
  handleOnPress: ()=> void
}


export const ButtonComponent: React.FC<ButtonProps> = ({textBtn, handleOnPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleOnPress}>
        <Text style={styles.btnText}>
          {textBtn}
        </Text>
      </TouchableOpacity>
  )
}
