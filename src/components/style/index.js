import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    /* CSS do Title */

    title : {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,


    },
    titletext: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',

    },

    /* Css do Result */

    result: {
        marginTop: 15,
        backgroundColor: "#fff"
    },

    resultText: {
        fontSize: 24,
        color: '#000',

    },

    /* CSS do Form */

    fomrContext:{
        bottom: 0,
        backgroundColor: "#FFF",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50,
        
    },

    form:{
        width: "auto",
        maxWidth: "100%",
        height: "auto",

    },

    text:{
        fontSize: 20,
        fontWeight: "bold",
        margin: 3,
        color: "black"
    },


    textInput:{
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: 'grey',
        color: "black",
        borderRadius: 10,
        margin: 5,
        borderStyle: "solid", 
        paddingTop: 15,

    },

    button:{
        margin: "auto",
        marginTop: 15,
        color:"white",
        backgroundColor: "black",
        alignItems: "center",
        fontSize: 80,
        borderRadius: 10,
        width: 180,
        alignSelf: "center",

    },

    buttonText:{
        fontSize: 20,
        color: "white",

    },

    resultText:{
        paddingTop: 30,
        color: "black",
        fontSize: 20,

    }

    
 
});

export default styles;