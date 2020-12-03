import React from 'react'
import {View,Text} from "react-native";
import DashboardCard from '../../components/Card/DashboardCard';
import Center from '../../components/Center/Center';
export default function Dashboard() {
    return (
        
            <View style={{backgroundColor:"black", height:"100%"}}>
                 <Text style={{color:"white", fontSize:20, fontWeight:"bold", paddingLeft:15,paddingTop:"10%"}}>Overview</Text>
                <View style={{display:"flex",alignItems:"center"}}>
                  <DashboardCard></DashboardCard>
                  <View style={{backgroundColor:"#B30200", padding:5,borderRadius:10, position:"absolute",right:"10%"}}><Text style={{color:"white",}}>Last 10 days</Text></View>
                  <View style={{display:"flex", flexDirection:"row",width:"100%",alignContent:"space-between",justifyContent:"space-between"}}>
                  <Text style={{color:"white", fontSize:20, fontWeight:"bold", padding:15}}>Add More Accounts</Text>
                  <Text style={{color:"gray", fontSize:14, fontWeight:"bold",padding:15}}>Add </Text>
                  </View>
                </View>
                
           
            </View>
           
       
    )
}
