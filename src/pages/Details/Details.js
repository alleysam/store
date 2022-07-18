import React from "react";
import { View, Text,ActivityIndicator } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import DetailCard from "../../components/DetailCard/DetailCard";

const Details = ({ route }) =>{
    const id = route.params;
    const {loading,error,data} = useFetch("https://fakestoreapi.com/products/"+id);
    console.log(data);

    if(loading){
        return <ActivityIndicator size={"large"} color={"green"}/>;
    }
    else if(error){
        return <Text>{error}</Text>;
    }

    return(
        <View>
            <DetailCard title={data.title} imageURL={data.image} desc={data.description} price={data.price} category={data.category}/>
        </View>
    );
};

export default Details;