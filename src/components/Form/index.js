import { View, Text, TextInput, Button } from "react-native";
import Result from "../Result"
import { useState } from "react";
import styles from "../style";
import { TouchableOpacity } from "react-native";

export default function Form() {

    const [capital, setCapital] = useState(null)
    const [taxa, setTaxa] = useState(null)
    const [tempo, setTempo] = useState(null)
    const [montante, setMontante] = useState(null)

    function calcularJuros(){
        let valor
        for (let i=1; i<=tempo; i++){
            valor = capital * (1+ taxa / 100) ** tempo
        }
        return setMontante(valor)
    }

    return (
        <View style={styles.fomrContext}>
            <View style={styles.form}> 
                <Text style={styles.text}>Informe o capital:</Text>

                <TextInput style={styles.textInput}
                keyboardType="numeric" 
                onChangeText={setCapital} 
                value={capital} />

                <Text style={styles.text}>Informe a taxa de justos (a.m):</Text>

                <TextInput style={styles.textInput}
                keyboardType="numeric" 
                onChangeText={setTaxa} 
                value={taxa} />

                <Text style={styles.text}>Informe o tempo (meses):</Text>

                <TextInput style={styles.textInput}
                 keyboardType="numeric" 
                 onChangeText={setTempo} 
                 value={tempo} />

                <TouchableOpacity style={styles.button}
                onPress={() => calcularJuros()} >
                    <Text style={styles.buttonText}> CALCULAR</Text>

                </TouchableOpacity>
            </View>
            <View>
                <Result Result={montante}/>
            </View>
        </View>    
    );
}