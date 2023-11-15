import * as React from "react"
import Box from "@mui/material/Box"
import { Person as PersonIcon } from "@mui/icons-material"
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography
} from "@mui/material"
import { FormikProps } from "formik"
import { HcardBuilderFormData } from "./hcardBuilderFormData"

export function HcardPreviewCard({
	formikProps
}: {
	formikProps: FormikProps<HcardBuilderFormData>
}) {
	let addressLineOne = ""
	if (formikProps.values.streetNumber)
		addressLineOne += formikProps.values.streetNumber
	if (formikProps.values.streetName)
		addressLineOne += " " + formikProps.values.streetName

	let addressLindTwo = ""
	if (formikProps.values.suburn) addressLindTwo += formikProps.values.suburn
	if (formikProps.values.state)
		addressLindTwo += ", " + formikProps.values.state

	let fullName = ""
	if (formikProps.values.givenName) fullName += formikProps.values.givenName
	if (formikProps.values.surname) fullName += formikProps.values.surname
	return (
		<Box position="relative">
			<Typography position="absolute" top={-30} right={40} color={"#A2A4A8"}>
				HCARD PREVIEW
			</Typography>
			<Card sx={{ mx: 5, my: 15, position: "relative" }}>
				<CardHeader
					sx={{ backgroundColor: "#374D61", height: 100, color: "red" }}
					avatar={
						<Avatar
							variant="square"
							sx={{
								position: "absolute",
								right: 20,
								height: 150,
								width: 120,
								top: 15
							}}
							aria-label="recipe"
							src={
								formikProps.values.imageUrl
									? formikProps.values.imageUrl
									: undefined
							}
						>
							<PersonIcon sx={{ fontSize: 100 }} />
						</Avatar>
					}
					title={
						<Typography pt={5} color="white" variant="h5">
							{fullName}
						</Typography>
					}
				/>
				<CardContent sx={{ py: 3 }}>
					<Grid height={40} container>
						<Grid xs={2} display="flex" alignItems={"center"} item>
							<Typography color={"grey"}>EMAIL</Typography>
						</Grid>
						<Grid item xs={3} display="flex">
							<Typography>{formikProps.values.email}</Typography>
						</Grid>
					</Grid>
					<Divider />
					<Grid height={40} container>
						{" "}
						<Grid xs={2} display="flex" alignItems={"center"} item>
							<Typography color={"grey"}>PHONE</Typography>
						</Grid>
						<Grid item xs={3} display="flex">
							<Typography>{formikProps.values.phone}</Typography>
						</Grid>
					</Grid>
					<Divider />
					<Grid height={40} container>
						<Grid xs={2} display="flex" alignItems={"center"} item>
							<Typography color={"grey"}>ADDRESS</Typography>
						</Grid>
						<Grid item xs={3} display="flex" alignItems={"center"}>
							<Typography>{addressLineOne}</Typography>
						</Grid>
					</Grid>
					<Divider />
					<Grid height={40} container>
						<Grid xs={2} display="flex" alignItems={"center"} item>
							<Typography></Typography>
						</Grid>
						<Grid item xs={3} alignItems={"center"} display="flex">
							<Typography>{addressLindTwo}</Typography>
						</Grid>
					</Grid>
					<Divider />
					<Grid height={{ xs: 80, sm: 2, md: 40 }} container>
						<Grid item xs={12} md={6}>
							<Grid my={1} container>
								<Grid xs={4} display="flex" alignItems={"center"} item>
									<Typography color={"grey"}>POSTCODE</Typography>
								</Grid>
								<Grid item xs={3} display="flex">
									<Typography>{formikProps.values.postCode}</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid my={1} container>
								<Grid xs={4} display="flex" alignItems={"center"} item>
									<Typography color={"grey"}>COUNTRY</Typography>
								</Grid>
								<Grid item xs={3} display="flex">
									<Typography>{formikProps.values.country}</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>{" "}
					<Divider />
				</CardContent>
			</Card>
		</Box>
	)
}
