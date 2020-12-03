import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Profile from "./Profile";
import PropTypes from 'prop-types'
import VideoDetails from './Video/VideoDetails';
import Videos from './Video/Videos';

function ProfileStack(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
               
              },
          }}>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
            <Stack.Screen name="VideoDetails" component={VideoDetails}></Stack.Screen>
            <Stack.Screen name="Videos" component={Videos}></Stack.Screen>
        </Stack.Navigator>
    )
}

ProfileStack.propTypes = {

}

export default ProfileStack

