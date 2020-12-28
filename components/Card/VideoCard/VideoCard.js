import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Stats from "../../Stats/Stats";

function VideoCard({ data,navigation }) {
  return (
    <TouchableOpacity
         
    style={{
      backgroundColor: "#252525",
      width: "90%",
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    }}
    onPress={()=>{
      navigation.navigate("Video Details",{data:data})
    }}
    
  >
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.image}
        source={{
          uri: "https://source.unsplash.com/random",
        }}
      />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            paddingLeft: 15,
            paddingBottom: 5,
          }}
        >
          {data.description}
        </Text>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Stats icon="heart" text={data.likes} padding={5} />
          <Stats icon="comment" text={data.comments} padding={5} />
          <Stats
            icon="area-chart"
            text={`${data.viewsEngRate} %`}
            padding={5}
          />
        </View>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Stats icon="play" text={data.views} padding={5} />
          <Stats icon="share" text={data.shares} padding={5} />
          <Stats icon="calendar" text={data.daysAfterSoundPeak} padding={5} />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

VideoCard.propTypes = {};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 80,
    height: 120,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
