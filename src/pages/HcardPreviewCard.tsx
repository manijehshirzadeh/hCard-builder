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
import { HcardDetailsLabeledValue } from "./HcardDetailsLabeledValue"

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
	if (formikProps.values.surname) fullName += " " + formikProps.values.surname
	return (
		<Box position="relative">
			<Typography position="absolute" top={-30} right={40} color={"#A2A4A8"}>
				HCARD PREVIEW
			</Typography>
			<Card sx={{ mx: 5, my: 15, position: "relative" }}>
				<CardHeader
					sx={{
						backgroundColor: "#374D61",
						height: 100,
						color: "red",
						pl: { xs: 0 }
					}}
					avatar={
						<Avatar
							variant="square"
							sx={{
								position: "absolute",
								right: 20,
								height: { xs: 80, sm: 150 },
								width: { xs: 60, sm: 110 },
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
						<Typography
							id="fullname"
							pt={{ xs: 10, md: 5 }}
							pl={{ xs: 0, md: 5 }}
							color="white"
							variant="h5"
						>
							{fullName}
						</Typography>
					}
				/>
				<CardContent sx={{ py: 3 }}>
					<Grid height={{ xs: 60, md: 30 }} container>
						<HcardDetailsLabeledValue
							label="EMAIL"
							value={formikProps.values.email}
						/>
					</Grid>
					<Divider />
					<Grid height={{ xs: 60, md: 30 }} container>
						<HcardDetailsLabeledValue
							label="PHONE"
							value={formikProps.values.phone}
						/>
					</Grid>
					<Divider />
					<Grid height={{ xs: 60, md: 30 }} container>
						<HcardDetailsLabeledValue label="ADDRESS" value={addressLineOne} />
					</Grid>
					<Divider />
					<Grid height={{ xs: 60, md: 30 }} container>
						<HcardDetailsLabeledValue label="" value={addressLindTwo} />
					</Grid>
					<Divider />
					<Grid height={{ xs: 60, md: 30 }} container>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid xs={4} display="flex" alignItems={"center"} item>
									<Typography variant="overline" color={"grey"}>
										POSTCODE
									</Typography>
								</Grid>
								<Grid item xs={3} display="flex" alignItems={"center"}>
									<Typography id="POSTCODE-preview-value">
										{formikProps.values.postCode}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid xs={4} display="flex" alignItems={"center"} item>
									<Typography variant="overline" color={"grey"}>
										COUNTRY
									</Typography>
								</Grid>
								<Grid item xs={3} display="flex">
									<Typography id="COUNTRY-preview-value">
										{formikProps.values.country}
									</Typography>
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
