import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView,Text,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Settings({navigation}) {
    return (
        <ScrollView style={{ backgroundColor: "black" }}>
        <TouchableOpacity style={{display:"flex", flexDirection:"column", backgroundColor:"#252525", marginTop:40, padding:10}} >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
        Saurav Panthee
        </Text>
        <Text style={{color:"gray"}}>Edit Profile</Text>
        </TouchableOpacity>
 

        </ScrollView>
    )
}

Settings.propTypes = {

}

export default Settings

