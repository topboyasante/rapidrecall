import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CreateNoteForm from "../../components/forms/CreateNoteForm";

export default function AddNote() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="p-5">
        <CreateNoteForm/>
      </ScrollView>
    </SafeAreaView>
  );
}
