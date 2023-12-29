import { create } from "zustand";

export const useNotesStore = create((set) => ({
  AllNotes: [
    {
      id: 0,
      title: "Test Note",
      content: "Hello World!",
    },
    {
      id: 1,
      title: "Test Note",
      content: "Hello World!",
    },
    {
      id: 2,
      title: "Test Note",
      content: "Hello World!",
    },
  ],
  PinnedNotes: [
    {
      id: 0,
      title: "Test Note",
      content: "Hello World!",
    },
    {
      id: 1,
      title: "Test Note",
      content: "Hello World!",
    },
    {
      id: 2,
      title: "Test Note",
      content: "Hello World!",
    },
  ],
}));
