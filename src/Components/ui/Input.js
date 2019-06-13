import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = props => {
  let template = null;

  switch (props.type) {
    case "text":
      template = (
        <TextInput
          underlineColorAndriod="transparent"
          {...props}
          style={[styles.input, props.overrideStyle]}
        />
      );
      break;

    default:
      return template;
  }

  return template;
};

const styles = StyleSheet.create({
    input:{
        width: 400,
        borderBottomWidth: 2,
        borderBottomColor: "blue",
        fontSize: 18,
        padding: 5,
        marginTop: 10
    }
});

export default Input;
