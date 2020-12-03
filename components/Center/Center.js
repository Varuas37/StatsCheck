import React from 'react'
import PropTypes from 'prop-types'
import {View} from "react-native"
function Center({children}) {
    return (
        <View style={{display:"flex",alignItems:"center",justifyContent:"center", backgroundColor:"red",
        alignContent: "center",margin:0,padding:0
        }}>
            {children}
        </View>
    )
}

Center.propTypes = {

}

export default Center

