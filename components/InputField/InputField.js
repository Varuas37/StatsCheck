import React, { Fragment ,useState} from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

import PropTypes from "prop-types";

function InputField({
  borderColor,
  height,
  borderWidth,
  borderRadius,
  width,
  margin,
  padding,
  onChangeText,
  autoCorrect,
  defaultValue,
  fontSize,
  fontWeight,
  clearTextOnFocus,
  autoFocus,
  value,
  onBlur,
  placeholder,
  placeholderTextColor,
color
}) {
  return (
    <Fragment>
      <TextInput
        style={{
          borderColor: borderColor,
          height: height,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          width: width,
          margin:margin,
         
          color:color,
          fontSize:fontSize,
          padding:padding,
          fontWeight:fontWeight,
        }}
        autoCorrect = {autoCorrect}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        clearTextOnFocus={clearTextOnFocus}
        autoFocus={autoFocus}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor ={placeholderTextColor}

      >

      </TextInput>
    </Fragment>
  );
}

InputField.propTypes = {};
InputField.defaultProps = {
  borderColor: "white",
  height: 60,
  borderWidth: 1,
  borderRadius: 10,
  width: "80%",
  marginBottom: "5%",
  defaultValue:"",
  color: "white",
  fontSize:20,
  padding:10,
  fontWeight: "normal",
  clearTextOnFocus:false,
  autoFocus:false,
};
export default InputField;

