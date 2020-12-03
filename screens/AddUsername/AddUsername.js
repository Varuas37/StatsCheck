import React from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../../components/Button/Button";

const AddUsername = () => {
  return (
    <View style={{backgroundColor:"black",height:"100%",width:'100%', display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",alignContent:"center"}}>

      <Text style={{color:"white", fontWeight:"bold",fontSize:30,padding:"5%"}}>Please add an account to Get Started</Text>
      <TextInput style={{borderColor:"white",height:60,borderWidth:1,borderRadius:10, width:"80%",marginBottom:"5%"}}></TextInput>
      <Button title="Next"></Button>
    </View>
  );
};
export default AddUsername;
