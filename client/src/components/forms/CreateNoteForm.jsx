import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNotesStore } from "../../store";
const uuidv4 = require("uuid/v4")
import { useNavigation } from '@react-navigation/native';

export default function CreateNoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addTodoFn = useNotesStore((state)=>state.createNote)
  const navigation = useNavigation()

  function addTodo() {
    if (title === "" && content === "") {
      Alert.alert("Error", "Unable to create note. Some fields are empty.");
    } else {
      const data = {
        id:uuidv4(),
        title,
        content,
        isPinned:true
      }
      addTodoFn(data)
      navigation.navigate("Home")
    }
  }

  return (
    <View>
      <View className="mb-5">
        <Text className="mb-2 text-lg">Title</Text>
        <TextInput
          className="border border-[#777777] rounded-md px-2 py-2 text-lg"
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View className="mb-5">
        <Text className="mb-2 text-lg">Content</Text>
        <TextInput
          className="border border-[#777777] min-h-[300px] text-lg rounded-md px-2 py-1"
          placeholder="Content"
          multiline
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <TouchableOpacity
        title="Add Todo"
        className="bg-green-700 w-full px-4 py-2 rounded-md"
        onPress={addTodo}
      >
        <Text className="text-center text-white text-lg font-bold">
          Create Note
        </Text>
      </TouchableOpacity>
    </View>
  );
}
