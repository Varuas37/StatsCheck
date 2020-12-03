import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Tags from "./Tags";
import PropTypes from 'prop-types'

function TagsStack(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: '#252525',
               
              },
          }}>
            <Stack.Screen name="Tags" component={Tags}></Stack.Screen>
        </Stack.Navigator>
    )
}

TagsStack.propTypes = {

}

export default TagsStack

