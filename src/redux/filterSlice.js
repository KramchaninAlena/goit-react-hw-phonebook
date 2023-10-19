import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, action) => {
    return action.payload
    },
},
})


export const { filterContact } = filterSlice.actions

export const filterReducer = filterSlice.reducer
