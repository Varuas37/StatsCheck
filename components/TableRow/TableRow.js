import React from 'react'
import PropTypes from 'prop-types'
import {View,Text} from "react-native"
import { random } from 'faker'
function TableRow(props) {
    return (
        <View style={{backgroundColor:"#252525", padding:15, marginTop:10, width:"90%", borderRadius:10,display:"flex",justifyContent:"space-between", flexDirection:"row"}}>
        <Text style={{color:"white",fontSize:16}}>Hello</Text>
    <Text style={{color:"white",fontSize:16}}>27999</Text>
    </View>
    )
}

TableRow.propTypes = {

}

export default TableRow

