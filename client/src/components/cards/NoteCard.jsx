import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TrashIcon, PencilIcon } from "react-native-heroicons/solid";
import { useNotesStore } from "../../store/index";

export default function NoteCard({ id, title, content, isHorizontal }) {
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const PinNote = useNotesStore((state) => state.pinNote);
  return (
    <TouchableOpacity onLongPress={()=>PinNote(id)}>
      <View
        className={
          isHorizontal
            ? "bg-[#fef68a] rounded-xl p-4 w-[350px] min-h-[200px] flex flex-col whitespace-pre-wrap"
            : "bg-[#fef68a] rounded-xl p-4 w-full min-h-[200px] flex flex-col mb-5 whitespace-pre-wrap"
        }
      >
        <View className="flex flex-row justify-between items-center">
          <Text className="text-xl mb-2 font-semibold">{title}</Text>
          <View className="flex flex-row items-center gap-2">
            <PencilIcon color={"black"} />
            <TouchableOpacity onPress={() => deleteNote(id)}>
              <TrashIcon color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-lg">{content}</Text>
      </View>
    </TouchableOpacity>
  );
}
