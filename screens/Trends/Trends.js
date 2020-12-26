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
  const data = [
    1.43742246179215,
    1.0875678856874187,
    0.9459203598811442,
    0.8895424369419433,
    0.8751154611921333,
    0.8418548145423812,
    0.9803198308758238,
    0.9248851412544112,
    1.5057801325589888,
    1.0176704723781722,
    0.9544873270264277,
    1.373272069697748,
    1.5003116688190756,
    1.5587648695919036,
    0.7857148518888757,
    1.253192156641388,
    1.0541352945535731,
    0.9203907843264336,
    0.6051152669005196,
    0.795806497924295,
    0.8128478422188228,
    0.9353461790537463,
    1.1033409526525713,
    0.6950668940337964,
    0.5835910260120591,
    0.5823824854399576,
    0.3245200202014416,
    0.22129991781262992,
    0.4166823479299789,
    0.4926645540567171,
    0.3716970551006465,
    0.49741650597185755,
    1.6855867367271602,
    1.622380179099652,
    0.7028873609498298,
    0.9302717924837226,
    1.2282312153582589,
    0.716900180570513,
    1.0093361788024031,
    0.8637804906530228,
    0.6405907267204217,
    0.9695563267267131,
    1.6632337248097686,
    0.7948071676428076,
    0.8785294509095627,
    2.897365956060313,
    1.362248795707805,
    1.1569799943301582,
    0.9189070461416615,
    1.6677876914496996,
    0.7575477048347521,
    0.7760828016453686,
    0.9324544738140386,
    1.2161797145043463,
    1.4209515822231378,
    0.9937109173614294,
    1.040468864415487,
    0.9738143596584348,
    0.8108635551830815,
    0.8602625080696439,
    1.0981539311095936,
    0.9274344975616123,
    0.9366491451148734,
    0.9081430047907707,
    0.9400103937863049,
    1.239887315385485,
    1.2608225636635064,
    1.0600070786545606,
    0.8770467880670255,
    0.9437579927164574,
    0.9649912379047555,
    1.0375575265328982,
    1.0030680559562806,
    1.0145098624176399,
    1.0642776151160716,
    0.9801284244362439,
    0.9478838508051907,
    0.817202811574184,
  ];

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
