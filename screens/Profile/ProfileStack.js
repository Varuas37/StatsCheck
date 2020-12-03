import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Profile from "./Profile";
import PropTypes from 'prop-types'

function ProfileStack(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
               
              },
          }}>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        </Stack.Navigator>
    )
}

ProfileStack.propTypes = {

}

export default ProfileStack

