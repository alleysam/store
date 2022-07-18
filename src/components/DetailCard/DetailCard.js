import { View,Text,Image,Dimensions } from "react-native";
import Style from "./DetailCard.style";

const DetailCard = ( props ) => {
    return(
        <View style={Style.container}>
            <Image resizeMode="contain" source={{uri:props.imageURL}} style={Style.image}/>
            <Text style={Style.title}>{props.title}</Text>
            <Text style={Style.desc}>{props.desc}</Text>
            <Text style={Style.price}>{props.price} $</Text>
            <Text style={Style.category}>{props.category}</Text>
        </View>
    );
};

export default DetailCard;