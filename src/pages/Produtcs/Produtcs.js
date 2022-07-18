import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import ProdutcsCard from "../../components/ProdutcsCard";


import useFetch from "../../hooks/useFetch/useFetch";


const Produtcs = ({ navigation }) =>{

    const {loading,error,data} = useFetch("https://fakestoreapi.com/products");

    const onPressHandling =  ( item )  => {
        navigation.navigate("Details",item.id);
    }


    function renderItem( {item} ){
        return <ProdutcsCard onPress={()=> onPressHandling(item)} title={item.title} price={item.price} imageURL={item.image}/>;
    }

    if(loading){
        return <ActivityIndicator size={"large"} color={"green"}/>;
    }
    else if (error){
        return <Text>{error}</Text>;
    }

    return(
        <View>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
    );
};

export default Produtcs;