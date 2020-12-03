import React, { Fragment, useState } from "react";
import { Text, View, StyleSheet, Image, Switch,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StylesSignup from "./StyleSignup";
import iconStat from "../../assets/iconStat.png";
import iconGoogle from "../../assets/iconGoogle.png";
import pngAnalytics from "../../assets/Analytics.png";
import Button from "../../components/Button/Button";
function Signup(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
const handleSignin=()=>{
    if (isEnabled){

    }
    else{
        alert("You need to accept the Terms & Conditons and Privacy policy before signing up")
    }
}
  return (
    <Fragment>
      <LinearGradient
        // Background Linear Gradient
        colors={["#870000", "#190A05"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "100%",
        }}
      />

      <Image
        source={pngAnalytics}
        style={{
          height: "35%",
        //   maxHeight:"50%",
          width: "50%",
          position: "absolute",
          top: 10,
          minWidth:348,
        }}
      ></Image>

      <View style={StylesSignup.welcome}>
        <View style={StylesSignup.rectangle}>
          <Image source={iconStat} style={{ height: 70, width: 70 }}></Image>
        </View>
        <View style={{ padding: "5%" }}>
          <Text style={StylesSignup.heading1}>Welcome to</Text>
          <Text style={StylesSignup.heading1}>CheckStats</Text>
        </View>
      </View>
      <Text style={{ color: "white" }}>
        Track your tiktok progress and get in-depth insights
      </Text>

 
<View style={StylesSignup.bottomPortion}>
<View style={StylesSignup.termsAndConditions}>
        <Switch
          trackColor={{ false: "gray", true: "#40C461" }}
          thumbColor={isEnabled ? "white" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{ color: "white", paddingLeft: "5%" }}>
          I agree to StatCheck Terms & Conditions and Privacy Policy
        </Text>
      </View>
     <Button title="Sign in with Google" img={iconGoogle} handleClick={handleSignin} color="white" ></Button>
</View>
 
      
    </Fragment>
  );
}
export default Signup;
