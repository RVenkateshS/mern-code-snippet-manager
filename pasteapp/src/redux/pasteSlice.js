import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: [] // We start empty, data will come from DB
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    // 1. NEW ACTION: To set data coming from Backend
    setPastes: (state, action) => {
      state.pastes = action.payload;
    },
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
      toast.success("Paste Created Successfully");
    },
    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex((item) => item._id === action.payload._id);
      if (index >= 0) {
        state.pastes[index] = action.payload;
        toast.success("Paste Updated");
      }
    },
    removeFromPastes: (state, action) => {
      // We will handle DB deletion in the component, then update Redux here
      const nextPastes = state.pastes.filter((item) => item._id !== action.payload);
      state.pastes = nextPastes;
      toast.success("Paste Deleted");
    },
    resetAllPastes: (state) => {
      state.pastes = [];
    },
  },
})

// Export the new action
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes, setPastes } = pasteSlice.actions

export default pasteSlice.reducer