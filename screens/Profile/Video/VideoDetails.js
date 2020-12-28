import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Text, Image } from "react-native";
import ProgressCircle from "react-native-progress-circle";

import StyleVideo from "./StyleVideo";
const AdditionalData = ({ title, value, percent }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text
        style={
          ([StyleVideo.text],
          { fontSize: 15, fontWeight: "bold", color: "white" })
        }
      >
        {title}
      </Text>

      <Text style={StyleVideo.text}>{percent ? `${value} %` : value}</Text>
    </View>
  );
};
function VideoDetails({ route }) {
  const {
    description,
    likes,
    views,
    shares,
    comments,
    duration,
    createDate,
    daysAfterSoundPeak,
    viewsEngRate,
    viewsLikeRatio,
    followerEngRate,
  } = route.params.data;
  console.log(route.params.data);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={StyleVideo.container}>
        <Image 
          style={StyleVideo.image}
          source={{
            uri: "https://source.unsplash.com/random",
          }}
        />
        {/* <View> */}
        <Text style={StyleVideo.heading}>Description: </Text>
        <Text style={StyleVideo.descriptionText}>{description}</Text>
        {/* </View> */}
      </View>
      <View>
        <View style={StyleVideo.adviceWrapper}>
          <Text style={StyleVideo.heading}>Score Card</Text>
          <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
            <ProgressCircle
              percent={80}
              radius={50}
              borderWidth={10}
              color="red"
              shadowColor="#999"
              bgColor="#252525"
            >
              <Text style={{ fontSize: 16, color: "white" }}>{"100%"}</Text>
              <Text style={{ fontSize: 12, color: "white" }}>Overall</Text>
            </ProgressCircle>
            <ProgressCircle
              percent={viewsEngRate}
              radius={50}
              borderWidth={10}
              color="red"
              shadowColor="#999"
              bgColor="#252525"
            >
              <Text
                style={{ fontSize: 16, color: "white" }}
              >{`${viewsEngRate}%`}</Text>
              <Text style={{ fontSize: 12, color: "white" }}>Eng Rate</Text>
            </ProgressCircle>
            <ProgressCircle
              percent={viewsLikeRatio}
              radius={50}
              borderWidth={10}
              color="red"
              shadowColor="#999"
              bgColor="#252525"
            >
              <Text
                style={{ fontSize: 16, color: "white" }}
              >{`${viewsLikeRatio}%`}</Text>
              <Text
                style={{ fontSize: 12, color: "white", alignContent: "center" }}
              >
                V:L Ratio
              </Text>
            </ProgressCircle>
          </View>
        </View>
        <View style={StyleVideo.additionalInfoWrapper}>
          <Text style={StyleVideo.heading}>Detailed Information</Text>

          <AdditionalData title={"Likes"} value={likes} />
          <AdditionalData title={"Views"} value={views} />
          <AdditionalData title={"Shares"} value={shares} />
          <AdditionalData title={"Comments"} value={comments} />
          <AdditionalData title={"Duration"} value={duration} />

          <AdditionalData title={"Views/Like Ratio"} value={viewsLikeRatio} />
          <AdditionalData
            title={"Days After Sound Peak"}
            value={daysAfterSoundPeak}
          />
          <AdditionalData
            title={"Engagement Rate (Views)"}
            value={viewsEngRate}
            percent={true}
          />
          <AdditionalData
            title={"Engagement Rate (Followers)"}
            value={followerEngRate}
            percent={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}

VideoDetails.propTypes = {};

export default VideoDetails;
