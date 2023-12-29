import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function AddNoteButton() {
  return (
    <TouchableOpacity className="bg-red-500 fixed bottom-0 right-0 w-[50px] h-[50px] z-[20]">
      <View>
        <Text>AddNoteButton</Text>
      </View>
    </TouchableOpacity>
  );
}
