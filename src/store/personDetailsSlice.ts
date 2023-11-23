import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PersonDetails {
	givenName: string
	surname: string
	email: string
	phone: number | undefined
	streetNumber: number | undefined
	streetName: string
	suburb: string
	state: string
	postCode: number | undefined
	country: string
	imageUrl: string
}

interface PersonDetailsState {
	personDetails: PersonDetails
}

const initialState: PersonDetailsState = {
	personDetails: {
		givenName: "",
		surname: "",
		email: "",
		phone: undefined,
		streetNumber: undefined,
		streetName: "",
		suburb: "",
		state: "",
		postCode: undefined,
		country: "",
		imageUrl: ""
	}
}

export const personDetailsSlice = createSlice({
	name: "personalDetails",
	initialState,
	reducers: {
		updatePersonDetails: (state, action: PayloadAction<PersonDetails>) => {
			state.personDetails = action.payload
		}
	}
})

export const { updatePersonDetails } = personDetailsSlice.actions

export default personDetailsSlice.reducer
