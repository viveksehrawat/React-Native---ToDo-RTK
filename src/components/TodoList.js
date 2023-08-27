import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteITem = (item) => {
    dispatch(deleteTask({ name: item.name }));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => deleteITem(item)}
        >
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e9e9e9",
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
  },
  delete: {
    fontSize: 18,
    color: "red",
  },
  deleteButton: {},
});
