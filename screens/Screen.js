import React from "react"
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity} from "react-native"
import {FontAwesome5} from "@expo/vector-icons";

const Screen=()=> {
    return (
      <View style={styles.container}>
          <SafeAreaView style={{flex:1}}>
              <TouchableOpacity>
        
              </TouchableOpacity>
          </SafeAreaView>
        <Text>Hello World</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  export default Screen;