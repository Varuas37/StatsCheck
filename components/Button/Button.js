import React, { Fragment, useEffect } from "react";

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import StyleButton from "./StyleButton";
const Button = ({
  title,
  color,
  height,
  img,
  onPress,
  position,
  top,
  bottom,
  left,
  right,
  display,
  alignItems,
  alignContent,
  flexDirection,
  justifyContent,
  padding,
  backgroundColor,
  width,
  maxWidth,
  borderRadius,
  textColor,
  margin,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          display: display,
          alignItems: alignItems,
          alignContent: alignContent,
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          padding: padding,
          backgroundColor: backgroundColor,
          width: width,
          maxWidth: maxWidth,
          borderRadius: borderRadius,
          color: color,
          position: position,
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          height: height,
          margin:margin,
        }}
        onPress={onPress}
      >
        {img ? (
          <Image source={img} style={{ height: 22, width: 22 }}></Image>
        ) : null}
        <Text style={{ color: textColor, fontSize: 15, paddingLeft: "5%" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "row",
  justifyContent: "center",
  padding: 10,
  backgroundColor: "white",
  height: 50,
  width: "85%",
  maxWidth: 500,
  borderRadius: 10,
  margin:0,
  textColor:"black",
};

export default Button;
