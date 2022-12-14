import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  // active: {
  //   id: '123asd',
  //   title: '',
  //   body: '',
  //   date: 123456,
  //   imageUrls: []
  // }
}

export const journalSlice = createSlice({
	name: 'journal',
	initialState,
	reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
		},
		setActiveNote: (state, action) => {
			state.active = action.payload
      
		},
		setNotes: (state, action) => {
			state.notes = action.payload
		},
		setSaving: (state, action) => {
			
		},
		updateNote: (state, action) => {
			
		},
		deleteNoteById: (state, action) => {
			
		},
	},
})

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions