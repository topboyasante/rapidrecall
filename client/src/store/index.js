import { create } from "zustand";
import { generateID } from "../utils";

export const useNotesStore = create((set) => ({
  notes: [
    {
      id: generateID(),
      title: "Welcome to RapidRecall!",
      content: `📝Type In Your Note
👀Save and Edit
🗑️Don't Need It? Delete!`,
      isPinned: false,
    },
  ],
  createNote: (payload) =>
    set((state) => ({ notes: [...state.notes, payload] })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((i) => i.id !== id) })),
  pinNote: (id) =>
    set((state) => {
      const updatedNotes = state.notes.map((note) => {
        if (note.id === id) {
          // Create a new object with the same properties as the original note,
          // and toggle the value of isPinned
          return { ...note, isPinned: !note.isPinned };
        }
        return note;
      });

      // Return the updated state with the modified notes array
      return { ...state, notes: updatedNotes };
    }),
  editNote: (id, title, content) =>
    set((state) => {
      const updatedNotes = state.notes.map((note) => {
        if (note.id === id) {
          return { ...note, title, content };
        }
        return note;
      });

      // Return the updated state with the modified notes array
      return { ...state, notes: updatedNotes };
    }),
}));
