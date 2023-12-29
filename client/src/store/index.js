import { create } from "zustand";

export const useNotesStore = create((set) => ({
  notes: [],
  createNote: (payload) =>
    set((state) => ({ notes: [...state.notes, payload] })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((i) => i.id !== id) })),
}));
