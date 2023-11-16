import Box from "@mui/material/Box"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { Button, Grid, Typography } from "@mui/material"
import { FormikProps } from "formik"
import { HcardBuilderFormData } from "./hcardBuilderFormData"
import { useRef } from "react"
import { UnderlinedTitle } from "./UnderlinedTitle"

export function HcardBuilderForm({
	formikProps
}: {
	formikProps: FormikProps<HcardBuilderFormData>
}) {
	const hiddenFileInput = useRef(null)
	return (
		<Box component="form" px={5} noValidate autoComplete="off" py={"auto"}>
			<Typography variant="h4">hCard Builder</Typography>

			<Grid container spacing={4}>
				<UnderlinedTitle title="PERSONAL DETAILS" />
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.givenName}
						onChange={e =>
							formikProps.setFieldValue("givenName", e.target.value)
						}
						id="given-name"
						label="GIVEN NAME"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.surname}
						onChange={e => formikProps.setFieldValue("surname", e.target.value)}
						InputLabelProps={{
							shrink: true
						}}
						id="surname"
						label="SURNAME"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.email}
						onChange={e => formikProps.setFieldValue("email", e.target.value)}
						id="email"
						label="EMAIL"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.phone}
						onChange={e => formikProps.setFieldValue("phone", e.target.value)}
						id="phone"
						label="PHONE"
						type="number"
					/>
				</Grid>
				<UnderlinedTitle title="ADDRESS" />
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.streetNumber}
						onChange={e =>
							formikProps.setFieldValue("streetNumber", e.target.value)
						}
						id="street-number"
						label="HOUSE NAME OR #"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.streetName}
						onChange={e =>
							formikProps.setFieldValue("streetName", e.target.value)
						}
						id="street-name"
						label="STREET"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.suburn}
						onChange={e => formikProps.setFieldValue("suburn", e.target.value)}
						id="suburb"
						label="SUBURB"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.state}
						onChange={e => formikProps.setFieldValue("state", e.target.value)}
						id="state"
						label="STATE"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.postCode}
						onChange={e =>
							formikProps.setFieldValue("postCode", e.target.value)
						}
						id="postcode"
						label="POSTCODE"
						type="number"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						{...sharedTextFieldProps}
						value={formikProps.values.country}
						onChange={e => formikProps.setFieldValue("country", e.target.value)}
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
							backgroundColor: "#778C99",
							"&:hover": {
								backgroundColor: "#374D61"
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
								formikProps.setFieldValue(
									"imageUrl",
									URL.createObjectURL(event.target.files[0])
								)
							}
						}}
						className="filetype"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button
						size="large"
						sx={{
							backgroundColor: "#3DA9E3",
							"&:hover": {
								backgroundColor: "#4DA6D6"
							},
							boxShadow: 3,
							textTransform: "none"
						}}
						fullWidth
						variant="contained"
						onClick={() => formikProps.submitForm()}
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
	defaultValue: "",
	autoComplete: "off"
}
