
import React from 'react'
import {View,Text,ScrollView, Button} from "react-native";
import DashboardCard from '../../components/Card/DashboardCard';
import Center from '../../components/Center/Center';
import VideoCard from '../../components/Card/VideoCard/VideoCard';
export default function Profile({navigation}) {
    const handleClick=()=>{
        navigation.navigate("Videos")
    }
    return (
        <ScrollView style={{ backgroundColor: "black" }}>
      <Heading title="Overview"></Heading>
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
      
      <Heading title="Recent Videos"></Heading>
     
      
      <View style={{flex: 1,justifyContent:"center",alignItems:"center",}}>


         <VideoCard></VideoCard>
         <VideoCard></VideoCard>
         <VideoCard></VideoCard>
         <VideoCard></VideoCard>
         <VideoCard></VideoCard>
         <Button title="View All" color="white" onPress={handleClick}></Button>
         </View>
   
       
      </ScrollView>
    )
}



const Heading =({title})=>{
    return(
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
        {title}
      </Text>
      
    )
}