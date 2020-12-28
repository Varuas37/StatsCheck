import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Profile from "./Profile";
import PropTypes from 'prop-types'
import VideoDetails from './Video/VideoDetails';
import Videos from './Video/Videos';
import { BaseRouter } from '@react-navigation/native';

function ProfileStack({route,navigation}) {
    // if(route&&route.state.index > 0){
    //     navigation.setOptions({tabBarVisible:false})
    // }
    // else{
    //     navigation.setOptions({tabBarVisible:true})
    // }
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
              },
          }}>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
            <Stack.Screen name="Video Details" component={VideoDetails}></Stack.Screen>
            <Stack.Screen name="Videos" component={Videos}></Stack.Screen>
        </Stack.Navigator>
    )
}

ProfileStack.propTypes = {

}

export default ProfileStack

