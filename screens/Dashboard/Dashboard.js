import React, { useState, Fragment } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import DashboardCard from "../../components/Card/DashboardCard";
import  ProgressBar from 'react-native-progress/Bar';
import StyleDashboard from "./StyleDashboard"

export default function Dashboard({navigation}) {
  const [filter, setFilter] = useState("Last 10 Days");
  
  const addAccount=()=>{
    navigation.navigate("AddUsername")
  }
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          paddingLeft: 15,
          paddingTop: "10%",
          marginBottom:20,
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

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignContent: "space-between",
          justifyContent: "space-between",
          // backgroundColor:"red"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            padding: 15,
          }}
        >
        Track Accounts
        </Text>
        <Button title="Add" color="white" onClick={addAccount}>
   
           
        </Button>
     
      </View>

    

    
    </ScrollView>
  );
}
