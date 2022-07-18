
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        height: Dimensions.get("window").height/4 ,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:10,
        backgroundColor:"white",
        borderRadius:10,
        borderColor:"gray",
        margin:10,
    },
    image:{
        height:150,
        width:150,
    },
    imgContainer:{
        marginRight:50,
        height:150,
        width:150,
    },
    priceTitleContainer:{
        flex:1,
        justifyContent:"space-evenly",
        height:Dimensions.get("window").height/4,
        width:300,
    },
    title:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
    },
    price:{
        color:"green",
        fontWeight:"bold",
    }

});