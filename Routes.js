import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import Center from "./components/Center/Center";

import { AppTabs } from "./Navigation/Tabs/AppTabs";
import AuthStack from "./Navigation/AuthStack/AuthStack";
// interface RoutesProps {}

export const Routes = ({ RouteProps }) => {
  const [loading, setLoading] = useState(false);
  const user = true;
  // useEffect(()=>{
  //     setLoading(false)
  // },[loading] )
  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large"></ActivityIndicator>
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs></AppTabs> : <AuthStack></AuthStack>}
    </NavigationContainer>
  );
};
