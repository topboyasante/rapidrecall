import React from "react";
import { FlatList, View } from "react-native";
import { useNotesStore } from "../../store/index";
import NoteCard from "../cards/NoteCard";

export default function PinnedNotes() {
  const PinnedNotes = useNotesStore((state) => state.PinnedNotes);
  return (
    <View>
      <FlatList
        data={PinnedNotes}
        renderItem={({ item }) => (
          <NoteCard title={item.title} content={item.content} isHorizontal={true}/>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: 5 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
