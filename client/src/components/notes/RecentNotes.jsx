import React from "react";
import { View } from "react-native";
import { useNotesStore } from "../../store";
import NoteCard from "../cards/NoteCard";

export default function RecentNotes() {
  const notes = useNotesStore((state) => state.AllNotes);
  const recentNotes = notes.sort((a, b) => b - a);
  return (
    <View>
      <View>
        {recentNotes.map((item) => {
          return (
            <NoteCard
              title={item.title}
              content={item.content}
              isHorizontal={false}
              key={item.id}
            />
          );
        })}
      </View>
    </View>
  );
}
