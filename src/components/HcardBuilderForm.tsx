import Box from "@mui/material/Box"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { Button, Grid, Typography } from "@mui/material"
import { useRef } from "react"
import { UnderlinedTitle } from "./UnderlinedTitle"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store"
import { updatePersonDetails } from "@/store/personDetailsSlice"

export function HcardBuilderForm() {
	const dispatch = useDispatch<AppDispatch>()
	const { personDetails } = useSelector(
		(state: RootState) => state.personDetails
	)

	const hiddenFileInput = useRef<HTMLInputElement>(null)

	return (
		<Box component="form" px={5} noValidate autoComplete="off" py="auto">
			<Typography variant="h4">hCard Builder</Typography>

			<Grid container spacing={4}>
				<UnderlinedTitle title="PERSONAL DETAILS" />
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.givenName}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									givenName: e.target.value
								})
							)
						}
						id="given-name"
						label="GIVEN NAME"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.surname}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									surname: e.target.value
								})
							)
						}
						id="surname"
						label="SURNAME"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.email}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									email: e.target.value
								})
							)
						}
						id="email"
						label="EMAIL"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.phone}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									phone: +e.target.value
								})
							)
						}
						id="phone"
						label="PHONE"
						type="number"
					/>
				</Grid>
				<UnderlinedTitle title="ADDRESS" />
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.streetNumber}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									streetNumber: +e.target.value
								})
							)
						}
						id="street-number"
						label="HOUSE NAME OR #"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.streetName}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									streetName: e.target.value
								})
							)
						}
						id="street-name"
						label="STREET"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.suburb}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									suburb: e.target.value
								})
							)
						}
						id="suburb"
						label="SUBURB"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.state}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									state: e.target.value
								})
							)
						}
						id="state"
						label="STATE"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.postCode}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									postCode: +e.target.value
								})
							)
						}
						id="postcode"
						label="POSTCODE"
						type="number"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={personDetails.country}
						onChange={e =>
							dispatch(
								updatePersonDetails({
									...personDetails,
									country: e.target.value
								})
							)
						}
						id="country"
						label="COUNTRY"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button
						size="large"
						fullWidth
						variant="contained"
						sx={{
							backgroundColor: "secondary.main",
							"&:hover": {
								backgroundColor: "secondary.dark"
							},
							textTransform: "none"
						}}
						onClick={() => {
							if (hiddenFileInput.current) {
								hiddenFileInput.current.click()
							}
						}}
					>
						Upload Avatar
					</Button>
					<input
						ref={hiddenFileInput}
						style={{ display: "none" }}
						type="file"
						onChange={event => {
							if (event.target.files && event.target.files[0]) {
								dispatch(
									updatePersonDetails({
										...personDetails,
										imageUrl: URL.createObjectURL(event.target.files[0])
									})
								)
							}
						}}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button
						size="large"
						sx={{
							backgroundColor: "primary.light",
							"&:hover": {
								backgroundColor: "secondary.light"
							},
							boxShadow: 3,
							textTransform: "none"
						}}
						fullWidth
						variant="contained"
						id="submit-hcard-form"
						onClick={() => {
							// TODO: Once a backend is setup for this,
							// the submission of the form will be completed.
						}}
					>
						Create hCard
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

const sharedTextFieldProps: Partial<TextFieldProps> = {
	size: "small",
	fullWidth: true,
	InputLabelProps: {
		shrink: true
	},
	autoComplete: "off"
}
