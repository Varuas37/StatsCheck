import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Settings from "./Settings";
import PropTypes from 'prop-types'

function SettingsStack(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
               
              },
          }}>
            <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        </Stack.Navigator>
    )
}

SettingsStack.propTypes = {

}

export default SettingsStack

