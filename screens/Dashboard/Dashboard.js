import React, { useState, Fragment } from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
import DashboardCard from "../../components/Card/DashboardCard";
import ProgressBar from "react-native-progress/Bar";
import StyleDashboard from "./StyleDashboard";

export default function Dashboard({ navigation }) {
  const [filter, setFilter] = useState("Last 10 Days");

  const addAccount = () => {
    navigation.navigate("AddUsername");
  };
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          paddingLeft: 15,
          paddingTop: "10%",
          marginBottom: 20,
          // backgroundColor:"red"
        }}
      >
        Overview
      </Text>
      <View
        style={{
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DashboardCard></DashboardCard>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          paddingLeft: 15,
          paddingTop: "10%",
        }}
      >
        Basic Stats
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <View
          style={{
            display: "flex",
            width: "90%",
            backgroundColor: "#252525",
            padding:25,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent:"space-between",
            // alignItems:"center",
            alignContent:"center",
            flexWrap: 'wrap',
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: "47%",
              borderRadius: 10,
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
             
            }}
          >
            <Image
              source={require("./clock.png")}
              style={StyleDashboard.image}
            />
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              8:00 AM
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
              }}
            >
              Best time for you to post
            </Text>
          </View>
          <View
            style={{
           backgroundColor: "red",
              width: "47%",
              borderRadius: 10,
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./video.png")}
              style={StyleDashboard.image}
            />
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
             42
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
              }}
            >
              Videos Uploaded Last week
            </Text>
          </View>

          <View
            style={{
           backgroundColor: "red",
              width: "47%",
              borderRadius: 10,
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
              marginTop:20,
            }}
          >
            <Image
              source={require("./followers.png")}
              style={StyleDashboard.image}
            />
            <Text
              style={{
                color: "white",
                fontSize: 16, 
                fontWeight: "bold",
              }}
            >
             +30
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
              }}
            >
              followers gained
            </Text>
          </View>

          <View
            style={{
           backgroundColor: "red",
              width: "47%",
              borderRadius: 10,
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
              marginTop:20,
            }}
          >
            <Image
              source={require("./followers.png")}
              style={StyleDashboard.image}
            />
            <Text
              style={{
                color: "white",
                fontSize: 16, 
                fontWeight: "bold",
              }}
            >
             +30
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
              }}
            >
              followers gained
            </Text>
          </View>
      
        </View>
      </View>
    </ScrollView>
  );
}
