import React, { useState,useEffect} from "react";

import { AntDesign,Ionicons } from '@expo/vector-icons'; 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import DashboardStack from "../../screens/Dashboard/DashboardStack";
import TagsStack from "../../screens/Tags/TagsStack";
import TrendsStack from "../../screens/Trends/TrendsStack";
import ProfileStack from "../../screens/Profile/ProfileStack";

const Tabs = createBottomTabNavigator()

export const AppTabs=()=>{
    return(
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName =
                'home'
            
              } else if (route.name === 'Profile') {
                iconName = 'user'
              }
              else if (route.name === 'Tags') {
                iconName = 'tagso';
              }
              else if (route.name === 'Trends') {
                iconName = 'linechart';
              }
              

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
         

          })}
          tabBarOptions={{
            activeTintColor: '#B30200',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#252525',
               
                // paddingBottom: 0
          }
          }}
          
        
        
        >
            <Tabs.Screen name="Home" component={DashboardStack}></Tabs.Screen>
            <Tabs.Screen name="Tags" component={TagsStack}></Tabs.Screen>
            <Tabs.Screen name="Trends" component={TrendsStack}></Tabs.Screen>
            <Tabs.Screen name="Profile" component={ProfileStack}></Tabs.Screen>
        </Tabs.Navigator>
    )
}