import { StyleSheet } from 'react-native';

const StylesSignup = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading1:{
        // fontFamily:"SFPro",
        fontSize: 35,
        fontWeight:"bold",
        color:"#fff"
    },
    rectangle:{
        display:"flex",
        alignItems:'center',
        alignContent:"center",
        width: 75,
        height: 75,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    welcome:{
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"row",
       
        
    },
    welcomeWrapper:{
        position:"absolute",
        top:"30%",
        left:"11%"
    },
    termsAndConditions:{
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"row",
        padding:"10%"
        
    },
    loginWithGoogle:{
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"row",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",
        height: 50,
       width:"100%",
       maxWidth:500,
        borderRadius:10,

       
    },
    bottomPortion:{
        display:"flex",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"column",
        position:"absolute",
        bottom:"15%",
        width:"70%",
        left:"15%"
    }
  });

  export default StylesSignup;