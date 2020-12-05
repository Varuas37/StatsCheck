import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Trends from "./Trends";
import PropTypes from 'prop-types'

function TrendsStack(props) {
        return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
               
              },
          }}>
            <Stack.Screen name="Trends" component={Trends}></Stack.Screen>
        </Stack.Navigator>
    )
}

TrendsStack.propTypes = {

}

export default TrendsStack

