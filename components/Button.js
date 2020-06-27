import React from "react";
import { Dimensions, Text, TouchableHighlight } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Button = ({ onPress, children, value, Color, textColor }) => {
  return (
    <TouchableHighlight
      disabled={value}
      underlayColor="#71747B"
      onPress={onPress}
      style={[styles.buttonStyle , { backgroundColor:Color}]}
    >
      <Text style={[styles.textStyle ,{ color: textColor }]}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = {
  textStyle: {
    fontSize:  Height*0.024,//13
    fontWeight: "500"
  },

  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#71767B",
		height: 0.069 * Height,
		marginBottom:7
  }
};

export default Button;