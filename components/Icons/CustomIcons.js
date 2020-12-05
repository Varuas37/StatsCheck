import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
function CustomIcons({ icon, size, color, backgroundColor, iconOnly, padding}) {
  return (
    <View
      style={{
        height: { size },
        width: { size },
        backgroundColor: backgroundColor,
        borderRadius: 4,
        padding: padding,
      }}
    >
      <FontAwesome name={icon} size={size} color={color} />
    </View>
  );
}

CustomIcons.propTypes = {};
CustomIcons.defaultProps = {
  backgroundColor: "black",
  color: "white",
  iconOnly: false,
  padding:10
};
export default CustomIcons;
