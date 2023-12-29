import React from "react";
import { Text, View } from "react-native";
import { useNotesStore } from "../../store";
import NoteCard from "../cards/NoteCard";

export default function RecentNotes() {
  const notes = useNotesStore((state) => state?.notes);
  const recentNotes = notes?.sort((a, b) => b - a);
  return (
    <View>
      {recentNotes?.length > 0 ? (
        <View>
          {recentNotes.map((item) => {
            return (
              <NoteCard
                title={item.title}
                content={item.content}
                isHorizontal={false}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </View>
      ) : (
        <Text>No notes added, yet</Text>
      )}
    </View>
  );
}
