import { View, Image } from "react-native";
import styles from "../style";
import imagemCalc from "../../../assets/Calculadora.png";

export default function Title() {
    return(
        <View>
            <Image 
            style ={
                {
                    width: 100,
                    height: 90,
                    alignItems: "flex-start",
            }
        }
            source={imagemCalc}  
            alt="logo do app"/>
        </View>
    )
}