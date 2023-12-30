import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNotesStore } from "../../store";
import { useNavigation } from "@react-navigation/native";
import { generateID } from "../../utils";

export default function CreateNoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addNoteFn = useNotesStore((state) => state.createNote);
  const navigation = useNavigation();

  function addNote() {
    if (title === "" && content === "") {
      Alert.alert("Error", "Unable to create note. Some fields are empty.");
    } else {
      const data = {
        id: generateID(),
        title,
        content,
        isPinned: false,
      };
      addNoteFn(data);
      setTitle("")
      setContent("")
      navigation.navigate("Home");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 justify-center"
    >
      <View className="mb-5">
        <TextInput
          className="px-2 py-2 text-3xl font-bold"
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View className="mb-5">
        <TextInput
          className="min-h-[300px] text-lg px-2 py-1"
          placeholder="Content"
          multiline
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <TouchableOpacity
        title="Add Todo"
        className="bg-green-700 w-full px-4 py-2 rounded-md"
        onPress={addNote}
      >
        <Text className="text-center text-white text-lg font-bold">
          Create Note
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
