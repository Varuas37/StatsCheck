import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from "./StyleApp"
import {Text, View,StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Signup from './screens/Auth/Signup';
import AddUsername from './screens/AddUsername/AddUsername';
import  {DrawerNavigation} from "react-navigation"
import {Routes} from "./Routes"
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Signup></Signup> */}
//       <AddUsername></AddUsername>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default Routes;