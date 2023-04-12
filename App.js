import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, TextInput, Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Todos from "./src/components/Todos/Todos";
import { render } from "react-dom";

const App = () => {

  const [counter, setCounter] = useState(0);
  const [list, setList] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleAddTask = () => {
    
    if(list != ''){
      setListItems([...listItems, list]);
      setCounter(counter+1);
    }

    setList('');

  }



  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.todo_header}>Yapılacaklar</Text>
        <Text style={styles.todo_counter}>{counter}</Text>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.flat}
          data={listItems}
          renderItem={({item})=> <Todos text={item} />}
        />

        <View style={styles.bottom}>
          <View>
            <TextInput
              placeholder="Yapılacaklar..."
              onChangeText={text => setList(text)}
              value={list}
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
              <Text style={styles.button_text}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );

}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },

  header: {
    flexDirection: 'row',
    padding: 15,
  },

  todo_header: {
    color: '#FFA500',
    fontSize: 45,
    fontWeight: 'bold',
    flex: 1
  },

  todo_counter: {
    color: '#FFA500',
    fontSize: 45,
  },

  body: {
    flex: 1,
    padding: 10,
  }, 

  flat: {
  },

  bottom: {
    justifyContent: 'flex-end',
    backgroundColor: '#37474F',
    height: 120,
    width: 'auto',
    borderRadius: 15,
    margin: 10,
  },

  button: {
    alignItems: "center",
    padding: 10,
    margin: 20,
    backgroundColor: '#808080',
    borderRadius: 10,
  },

  input: {
    color: '#767879',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 17,
  },

  button_text: {
    color: 'white',

  }






})
