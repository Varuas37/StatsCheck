import React, { useState,Fragment } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { random } from "faker";
function TableRow({data}) {
  const [details, setShowDetails] = useState(false);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#252525",
        padding: 15,
        marginTop: 10,
        width: "90%",
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
      onPress={() => setShowDetails(!details)}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>{data.tagName}</Text>
        <Text style={{ color: "white", fontSize: 16 }}>{data.averageViews}</Text>
      </View>

      {details ? (
        <Fragment>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              margin: 2,
              marginTop:20
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>
              Estimated True Mean Views
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>{data.estimatedTrueMeanViews}</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              margin: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>
              Number of Videos with the tag
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>{data.numberofVideoswithTag}</Text>
          </View>
        </Fragment>
      ) : null}
    </TouchableOpacity>
  );
}

TableRow.propTypes = {};

export default TableRow;
