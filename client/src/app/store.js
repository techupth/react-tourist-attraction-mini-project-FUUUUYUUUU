import { configureStore } from '@reduxjs/toolkit'
import textSlice from '../slices/textSlice'
import locationSlice from '../slices/locationSlice'

export const store = configureStore({
  reducer: {
    searchText : textSlice,
    locationList : locationSlice,
  },
})