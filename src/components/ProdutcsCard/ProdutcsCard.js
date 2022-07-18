import React from "react";
import { View, Text,Image,TouchableOpacity } from "react-native";
import Style from "./ProdutcsCard.style";

const ProdutcsCard = ( props ) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={Style.container}>
            <View style={Style.imgContainer}>
                <Image  resizeMode="contain" style={Style.image} source={{uri:props.imageURL}}/>   
            </View>
            <View style={Style.priceTitleContainer}>
                <Text style={Style.title}>{props.title}</Text>
                <Text style={Style.price}>{props.price} $</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProdutcsCard;