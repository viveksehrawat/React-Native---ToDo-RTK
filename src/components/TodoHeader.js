import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export const TodoHeader = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const submitTask = () => {
    if (todo.trim().length === 0) {
      alert("Please enter a task");
      setTodo("");
      return;
    }

    dispatch(addTask(todo));
    setTodo("");
  };

  return (
    <View>
      <Text style={styles.title}>Todo List</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textInput}
          value={todo}
          onChangeText={setTodo}
          placeholder="Add Todo"
        />
        <TouchableOpacity style={styles.button} onPress={submitTask}>
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: "75%",
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    justifyContent: "center",
  },
});
