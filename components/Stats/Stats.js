import React from 'react'
import PropTypes from 'prop-types'
import {View,Text} from "react-native"
import CustomIcons from '../Icons/CustomIcons'

function Stats({icon,text,size,backgroundColor,color,padding,weight}){
    return(
        <View style={{display:"flex",flexDirection:"row",padding:5,justifyContent:"center",alignItems:"center", }}>
        <CustomIcons icon={icon} color={color} backgroundColor={backgroundColor} padding={padding}/>
    
        <Text style={{color:"white",fontSize:16, fontWeight:weight,padding:5}}>{text}</Text>
        </View>
    )
}

Stats.defaultProps={
    fontWeight:"bold"
}

export default Stats

