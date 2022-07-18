import { StyleSheet,Dimensions  } from "react-native";

export default StyleSheet.create({
    container:{
        height:Dimensions.get("window").height,
        width:Dimensions.get("window").width,
        backgroundColor:"white",
        flex:1,
        flexDirection:"column",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        margin:5,
    },
    image:{
        height:200,
        width:200,
        margin:5,
    },
    title:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        margin:5,
    },
    price:{
        color:"green",
        fontWeight:"bold",
        margin:5,
    },
    category:{
        fontSize:15,
        color:"gray",
        margin:5,
    }
    
});