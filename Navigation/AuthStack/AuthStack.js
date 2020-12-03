import React from 'react'
import PropTypes from 'prop-types'
import Signup from "../../screens/Auth/Signup"
import AddUsername from '../../screens/AddUsername/AddUsername'
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
function AuthStack(props) {
    return (
        <Stack.Navigator initialRouteName="Login"  screenOptions={{
            //   header:()=>null
          }}>
          
            <Stack.Screen name="Sign in" component={Signup} options = {{header:()=>null}}/>
            <Stack.Screen name="AddUsername" component={AddUsername} options={{headerTitle:"" }} />
          </Stack.Navigator>
    
    )
}

AuthStack.propTypes = {

}

export default AuthStack

