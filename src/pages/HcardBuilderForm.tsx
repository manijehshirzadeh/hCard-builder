import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button, Divider, Grid, Typography } from "@mui/material"
import { FormikProps } from "formik"
import { HcardBuilderFormData } from "./hcardBuilderFormData"
import { useRef } from "react"

export function HcardBuilderForm({
	formikProps
}: {
	formikProps: FormikProps<HcardBuilderFormData>
}) {
	const hiddenFileInput = useRef(null)
	return (
		<Box
			component="form"
			px={6}
			noValidate
			autoComplete="off"
			pr={8}
			py={"auto"}
		>
			<Typography variant="h4">hCard Builder</Typography>

			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Typography variant="body2" color="grey.400" mt={3}>
						PERSONAL DETAILS
					</Typography>
					<Divider />
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						fullWidth
						value={formikProps.values.givenName}
						onChange={e =>
							formikProps.setFieldValue("givenName", e.target.value)
						}
						id="given-name"
						label="GIVEN NAME"
						defaultValue=""
						autoComplete="off"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						value={formikProps.values.surname}
						onChange={e => formikProps.setFieldValue("surname", e.target.value)}
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						id="surname"
						label="SURNAME"
						defaultValue=""
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						fullWidth
						value={formikProps.values.email}
						onChange={e => formikProps.setFieldValue("email", e.target.value)}
						id="email"
						label="EMAIL"
						defaultValue=""
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						value={formikProps.values.phone}
						onChange={e => formikProps.setFieldValue("phone", e.target.value)}
						fullWidth
						id="phone"
						label="PHONE"
						type="number"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body2" color="grey.400" mt={3}>
						ADDRESS
					</Typography>
					<Divider />
				</Grid>

				<Grid item xs={6}>
					<TextField
						size="small"
						value={formikProps.values.streetNumber}
						onChange={e =>
							formikProps.setFieldValue("streetNumber", e.target.value)
						}
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						id="street-number"
						label="HOUSE NAME OR #"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						fullWidth
						value={formikProps.values.streetName}
						onChange={e =>
							formikProps.setFieldValue("streetName", e.target.value)
						}
						id="street-name"
						label="STREET"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						value={formikProps.values.suburn}
						onChange={e => formikProps.setFieldValue("suburn", e.target.value)}
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						id="suburb"
						label="SUBURB"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						value={formikProps.values.state}
						InputLabelProps={{
							shrink: true
						}}
						onChange={e => formikProps.setFieldValue("state", e.target.value)}
						id="state"
						label="STATE"
						fullWidth
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						value={formikProps.values.postCode}
						onChange={e =>
							formikProps.setFieldValue("postCode", e.target.value)
						}
						id="postcode"
						label="POSTCODE"
						type="number"
						InputLabelProps={{
							shrink: true
						}}
						fullWidth
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						size="small"
						fullWidth
						value={formikProps.values.country}
						onChange={e => formikProps.setFieldValue("country", e.target.value)}
						id="country"
						label="COUNTRY"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xs={6}>
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
								console.log("Hi mandi")
								formikProps.setFieldValue(
									"imageUrl",
									URL.createObjectURL(event.target.files[0])
								)
							}
						}}
						className="filetype"
					/>
				</Grid>
				<Grid item xs={6}>
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
