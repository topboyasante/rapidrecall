import { View, Text } from "react-native";
import React from "react";

export default function NoteCard({ title, content, isHorizontal }) {
  return (
    <View
      className={
        isHorizontal
          ? "bg-[#fef68a] rounded-xl p-4 w-[350px] min-h-[200px] flex flex-col whitespace-pre-wrap"
          : "bg-[#fef68a] rounded-xl p-4 w-full min-h-[200px] flex flex-col mb-5 whitespace-pre-wrap"
      }
    >
      <Text className="text-xl mb-2 font-semibold">{title}</Text>
      <Text className="text-lg">{content}</Text>
    </View>
  );
}
