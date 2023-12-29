import React from "react";
import { FlatList, Text, View } from "react-native";
import { useNotesStore } from "../../store/index";
import NoteCard from "../cards/NoteCard";

export default function PinnedNotes() {
  const PinnedNotes = useNotesStore((state) =>
    state.notes.filter((i) => i.isPinned === true)
  );
  return (
    <View>
      {PinnedNotes.length > 0 ? (
        <View>
          <FlatList
            data={PinnedNotes}
            renderItem={({ item }) => (
              <NoteCard
                title={item.title}
                content={item.content}
                id={item.id}
                isHorizontal={true}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
        <Text>No notes added, yet</Text>
      )}
    </View>
  );
}
