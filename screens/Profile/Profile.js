
import React from 'react'
import {View,Text} from "react-native";
import DashboardCard from '../../components/Card/DashboardCard';
import Center from '../../components/Center/Center';
export default function Profile() {
    return (
        <View style={{backgroundColor:"black", height:"100%"}}>
             <Text style={{color:"white", fontSize:20, fontWeight:"bold", paddingLeft:15,paddingTop:"10%"}}>My Profile</Text>
             <View style={{display:"flex",alignItems:"center"}}>
                 
             <DashboardCard></DashboardCard>
             </View>
           
        </View>
    )
}
