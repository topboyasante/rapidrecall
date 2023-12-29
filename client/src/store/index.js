import { create } from "zustand";

export const useNotesStore = create((set) => ({
  notes: [],
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
}));
