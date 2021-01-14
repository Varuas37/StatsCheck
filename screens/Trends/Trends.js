import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import StylesTrend from "./StylesTrend";
import RNPickerSelect from "react-native-picker-select";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryZoomContainer
} from "victory-native";
import { TrendsData } from "./Data";
export default function Trends() {


  const windowWidth = Dimensions.get("window").width;
  const [pickedData, setPickedData] = useState(TrendsData);
  const [xAxisValue, setXAxisValue] = useState("date");
  const [yAxisValue, setYAxisValue] = useState("averageViews");
  const handleXPick = (value) => {

    setXAxisValue(value);
  };
  const handleYPick = (value) => {
    // TrendsData.map((item) => {
    //   setPickedData(pickedData.push(parseFloat(item.averageViews)));
    // });
    // console.log(pickedData);
    setYAxisValue(value);

  };

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <VictoryChart
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 },
        }}
        width={windowWidth + 30}
        // scale={{x: {xAxisValue}}}
        
        // containerComponent={
        //     <VictoryZoomContainer responsive={false}
        //       zoomDimension="y"
             
        //     />
        //   }
      >
        <VictoryAxis
          label={xAxisValue}
          style={{
            axisLabel: {
              fill: "white",
              
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={yAxisValue}
          style={{
            axisLabel: {
              padding: 35,
              fill: "white",
            },
          }}
        />
        <VictoryGroup offset={20}>
          <VictoryBar
            data={pickedData}
            style={{
              data: {
                fill: "red",
              },
              axisLabel: {
                fill: "white",
              },
            }}
          
            x= {xAxisValue}
            y={yAxisValue}
          
          />
        </VictoryGroup>
      </VictoryChart>
      
      <View style={StylesTrend.butttonContainer}>

     
      <View style={StylesTrend.btn}>
        <Text style={StylesTrend.btnText}>X- Axis</Text>
        <RNPickerSelect
          onValueChange={(value) => handleXPick(value)}
          style={StylesTrend.picker}
          value={xAxisValue}
          items={[
            { label: "Date", value: "date" },
            { label: "Average Views", value: "averageViews" },
            {
              label: "View Standard Deviation",
              value: "viewStandardDeviation",
            },
            { label: "1 Week Moving Average", value: "oneWeekMovingAverage" },
          ]}
        />
      </View>

      <View style={StylesTrend.btn}>
        <Text style={StylesTrend.btnText}>Y- Axis</Text>
        <RNPickerSelect
          onValueChange={(value) => handleYPick(value)}
          style={StylesTrend.picker}
          value={yAxisValue}
          items={[
            { label: "Date", value: "date" },
            { label: "Average Views", value: "averageViews" },
            {
              label: "View Standard Deviation",
              value: "viewStandardDeviation",
            },
            { label: "1 Week Moving Average", value: "oneWeekMovingAverage" },
          ]}
        />
      </View>
      </View>
      <Text style={{color:"gray", fontWeight:"bold",fontSize:20,padding:10}}>Note:</Text>
      <Text style={{color:"gray", padding:10}}>This shows the average number of views a sample of TikTok users got across all of their videos on a given day. It is normalized so that 1 is average for each person.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
});

//   import { BarChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
//   import { TouchableOpacity } from "react-native-gesture-handler";
//   <View style={StylesTrend.chartContainer}>
//         <View style={{ display: "flex", flexDirection: "row" }}>
//           <YAxis
//             data={data}
//             contentInset={contentInset}
//             svg={{
//               fill: "white",
//               fontSize: 10,
//             }}
//             showGrid
//             numberOfTicks={10}
//             formatLabel={(value) => `${value}`}
//           />
//           <BarChart
//             style={{ height: 200, marginLeft: 10, flex: 1 }}
//             data={data}
//             svg={{ fill }}
//             contentInset={{ top: 30, bottom: 30 }}
//           >
//             <Grid />
//           </BarChart>
//         </View>
//         <XAxis
//           style={{ marginHorizontal: -10 }}
//           data={data}
//           formatLabel={(value, index) => index}
//           contentInset={{ left: 45, right: 1 }}
//           svg={{ fontSize: 10, fill: "white" }}
//           // spacingOuter={10}
//         />
//       </View>
