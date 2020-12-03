import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet} from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
function CustomIcons({icon,size,color,backgroundColor}){
    return(
       <View style={{height:{size},width:{size},backgroundColor:backgroundColor,borderRadius:4,padding:10}}>
           <FontAwesome name={icon} size={size} color={color} />
        </View>
    )
}


CustomIcons.propTypes = {

}
CustomIcons.defaultProps={
    backgroundColor:"black",
    color:"white"
}
export default CustomIcons

