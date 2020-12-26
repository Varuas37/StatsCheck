import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet,Text} from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 


import CustomIcons from '../Icons/CustomIcons';
import Stats from "../Stats/Stats"
function DashboardCard({data}) {
    return (
      
        <View style={{backgroundColor: "#252525", width:"90%", height:"100%", minHeight:120, maxHeight:400, borderRadius:10 , display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Stats icon="user" text="47"/>
      <Stats icon="play" text="4K"/>
      <Stats icon="video-camera" text="34"/>
      <Stats icon="heart" text="1.1K"/>
        </View>

    )
}




DashboardCard.propTypes = {

}



export default DashboardCard

