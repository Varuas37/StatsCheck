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
       A week in review
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
              Videos Uploaded
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
             13% 
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
              }}
            >
              Engagement Rate
            </Text>
          </View>
      
        </View>
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
       Most Popular Tags
      </Text>
      <View>
        <Text  style={{
          color: "white",
          
        }}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </Text>
        </View>

    </ScrollView>
  );
}
