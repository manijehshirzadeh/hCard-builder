import { configureStore } from "@reduxjs/toolkit"
import personDetailsReducer from "./personDetailsSlice"

export const store = configureStore({
	reducer: {
		personDetails: personDetailsReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
