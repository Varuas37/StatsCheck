import React from 'react'
import {View,Text,ScrollView} from "react-native";
import Center from '../../components/Center/Center';
import TableRow from '../../components/TableRow/TableRow';
export default function Tags() {
    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <Text style ={{color:"white", fontSize:20, fontWeight:"bold", padding:15}}
            >Popular Tags</Text>
            <View style={{flex:1, alignItems:"center"}}>
            <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
         <TableRow></TableRow>
            </View>

        </ScrollView>
    )
}
