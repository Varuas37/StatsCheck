import { StyleSheet } from "react-native";

const StyleVideo = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "2%",
    backgroundColor: "#252525",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 120,
    marginBottom: 20,
  },
  descriptionText: {
    flexWrap: "wrap",
    color: "white",
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 10,
  },
  adviceWrapper: {
    backgroundColor: "#252525",
    padding: 10,
    borderRadius: 10,
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  additionalInfoWrapper: {
    backgroundColor: "#252525",
    padding: 10,
    borderRadius: 10,
    margin: "2%",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: "white",
  },
});

export default StyleVideo;
