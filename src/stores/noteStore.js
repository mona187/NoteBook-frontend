import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchNotes", error);
    }
  };

  noteDelete = async (noteID) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${noteID}`);
      const updatedNotes = this.notes.filter((note) => note.id !== noteID);
      this.notes = updatedNotes;
    } catch (error) {
      console.error(error);
    }
  };

  noteAdd = async (newNote, notebook) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        formData
      );
      this.notes.push(response.data);
      brand.notes.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  noteUpdate = async (updatedNote) => {
    try {
      const formData = new FormData();
      for (const key in updatedNote) formData.append(key, updatedNote[key]);
      const response = await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        formData
      );

      this.notes[this.notes.findIndex((note) => note.id === response.data.id)] =
        {
          ...response.data,
        };
    } catch (error) {
      console.error(error);
    }
  };

  getNoteById = (noteID) => this.products.find((note) => note.id === noteID);
}

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
