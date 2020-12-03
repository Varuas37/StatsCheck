import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet,Text} from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import CustomIcons from '../Icons/CustomIcons';

function DashboardCard(props) {
    return (
      
        <View style={{backgroundColor: "#252525", width:"90%", height:"40%", borderRadius:10 , margin:10, display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Stats icon="user" text="20K"/>
      <Stats icon="play" text="4K"/>
      <Stats icon="video-camera" text="34"/>
      <Stats icon="heart" text="1.1K"/>
        </View>

    )
}

function Stats({icon,text}){
    return(
        <View style={{display:"flex",flexDirection:"row",padding:5,justifyContent:"center",alignItems:"center"}}>
        <CustomIcons icon={icon} size="15" color="white"/>
        <Text style={{color:"white",fontSize:16, fontWeight:"bold",padding:10}}>{text}</Text>
        </View>
    )
}


DashboardCard.propTypes = {

}


export default DashboardCard

