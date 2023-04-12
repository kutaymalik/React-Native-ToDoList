import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container_active:{
        backgroundColor:'#7DA453',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },

    container_passive:{
        backgroundColor:'grey',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        textDecorationLine:'line-through'
    },

    todo_text_active:{
        color: 'white',
        padding: 10,
        fontSize: 18,
    },

    todo_text_passive:{
        color: 'lightgrey',
        padding: 10,
        fontSize: 18,
    }
})