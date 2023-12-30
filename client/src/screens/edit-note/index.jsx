import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNotesStore } from "../../store";
import { useNavigation } from "@react-navigation/native";


export default function EditNote({ route }) {
  const { id } = route.params;
  const notes = useNotesStore((state) => state?.notes);
  const editNoteFn = useNotesStore((state) => state?.editNote);
  const noteToBeEdited = notes.find((i) => i.id === id);
  const [title, setTitle] = useState(noteToBeEdited.title);
  const [content, setContent] = useState(noteToBeEdited.content);
  const navigation = useNavigation();

  function editTodo() {
    if (title === "" && content === "") {
      Alert.alert("Error", "Unable to edit note. Some fields are empty.");
    } else {
      editNoteFn(id, title, content);
      navigation.navigate("Home");
    }
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="p-5">
        <View className="mb-5">
          <Text className="text-3xl font-bold">Edit A Note</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-center"
        >
          <View className="mb-5">
            <TextInput
              className="px-2 py-2 text-lg"
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
            className="bg-blue-700 w-full px-4 py-2 rounded-md"
            onPress={editTodo}
          >
            <Text className="text-center text-white text-lg font-bold">
              Edit Note
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
