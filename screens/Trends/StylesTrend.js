import { StyleSheet } from 'react-native';

const StylesTrend = StyleSheet.create({
  butttonContainer:{
    display:"flex",
    flexDirection:"column",
    margin:"3%",

  },
  chartContainer:{
    margin:"5%",
    display:"flex",
    flexDirection:"column"
  },
  btn:{
      width:"100%",
      padding:"3%",
      height:60,
      backgroundColor:"#252525",
      color:"white",
      marginBottom:10,
      borderRadius:10,
      flexDirection:"row",
      justifyContent:"space-between",
      display:"flex",
      alignItems:"center",
      alignContent:"center",
  },
  text:{
      color:"white",
  },
  btnText:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  },
  picker:{
      color:"white",
      fontSize: 16
  }
  });

  export default StylesTrend;