import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Todos.styles';





const Todos = ({text}) => {

    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <TouchableOpacity style={[active ? styles.container_active : styles.container_passive]} onPress={handleClick} >
            <Text style={active ? styles.todo_text_active : styles.todo_text_passive}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Todos;