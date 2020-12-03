import React, { Fragment } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { Text, View, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Keyboard } from 'react-native'; 

const AddUsername = ({navigation}) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => navigation.navigate("Dashboard")
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
      onPress={()=>Keyboard.dismiss()}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 30,
          padding: "5%",
          position: "absolute",
          top: "15%",
        }}
      >
        Please add an account to Get Started
      </Text>
     
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputField
            margin={10}
            width="85%"
            autoFocus={false}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="@Username"
            placeholderTextColor="gray"
          ></InputField>
        )}
        name="username"
        rules={{ required: true }}
        defaultValue=""

      />
       {errors.username && <Text style={{color:"white"}}>Username is required.</Text>}

      <Button
        title="Submit"
        position="absolute"
        bottom="37%"
        textColor="white"
        backgroundColor="#B30200"
        width="70%"
       
        onPress={handleSubmit(onSubmit)}
      ></Button>
    </View>
  );
};
export default AddUsername;
