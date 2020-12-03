import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Dashboard from "./Dashboard";
import PropTypes from 'prop-types'
import AddUsername from '../AddUsername/AddUsername';

function DashboardStack(props) {
    return (
        <Stack.Navigator  initialRouteName="Dashboard" screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
               
              },
             
          }}>
            <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
            <Stack.Screen name="AddUsername" component={AddUsername}
            //  options = {{header:()=>null}}
            options={{headerTitle:"Add User" }} 
              ></Stack.Screen>
        </Stack.Navigator>
    )
}

DashboardStack.propTypes = {

}

export default DashboardStack

