import { View, Text } from "react-native";
import styles from "../style";

export default function Result(props) {
    return(
        <View >
            <Text style={styles.resultText}>{props.Result}</Text>
        </View>
    )
}