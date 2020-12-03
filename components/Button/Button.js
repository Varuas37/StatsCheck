import React,{Fragment, useEffect} from "react";

import { View, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import PropTypes from "prop-types";
import StyleButton from "./StyleButton";
const Button = ({ title, color, height, img,handleClick }) => {
  
  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.5}
        style={StyleButton.textwithImg}
        onPress={handleClick}

      >
       {img ? <Image source={img} style={{ height: 22, width: 22 }}></Image> :null}
        <Text style={{ color: "black", fontSize: 15, paddingLeft: "5%" }}>
        {title}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
