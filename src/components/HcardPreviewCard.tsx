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
import { HcardDetailsLabeledValue } from "./HcardDetailsLabeledValue"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

export function HcardPreviewCard() {
	const { personDetails } = useSelector(
		(state: RootState) => state.personDetails
	)

	function combineStringsWithSpaceBetween(
		stringOne?: string | number,
		stringTwo?: string
	): string {
		let combinedString = ""
		if (stringOne) combinedString += stringOne
		if (stringTwo) combinedString += " " + stringTwo

		return combinedString
	}

	return (
		<Box position="relative">
			<Typography position="absolute" top={-30} right={40} color={"#A2A4A8"}>
				HCARD PREVIEW
			</Typography>
			<Card className="vcard" sx={{ mx: 5, my: 15, position: "relative" }}>
				<CardHeader
					sx={{
						backgroundColor: "#374D61",
						height: 100,
						color: "red",
						pl: { xs: 0 }
					}}
					avatar={
						<Avatar
							className="photo"
							variant="square"
							sx={{
								position: "absolute",
								right: 20,
								height: { xs: 80, sm: 150 },
								width: { xs: 60, sm: 110 },
								top: 15
							}}
							aria-label="recipe"
							src={personDetails.imageUrl ? personDetails.imageUrl : undefined}
						>
							<PersonIcon sx={{ fontSize: 100 }} />
						</Avatar>
					}
					title={
						<Box className="fn">
							<Typography
								id="fullname"
								pt={{ xs: 10, md: 5 }}
								pl={{ xs: 0, md: 5 }}
								color="white"
								variant="h5"
							>
								{combineStringsWithSpaceBetween(
									personDetails.givenName,
									personDetails.surname
								)}
							</Typography>
						</Box>
					}
				/>
				<CardContent sx={{ py: 3 }}>
					<Grid height={{ md: 60, lg: 30 }} container>
						<HcardDetailsLabeledValue
							label="EMAIL"
							value={
								<a
									className="email"
									style={{
										textDecoration: "none",
										color: "rgba(0, 0, 0, 0.87)"
									}}
									href={`mailto:${personDetails.email}`}
								>
									{personDetails.email}
								</a>
							}
						/>
					</Grid>
					<Divider />
					<Grid height={{ md: 60, lg: 30 }} container>
						<HcardDetailsLabeledValue
							hCardClassName="tel"
							label="PHONE"
							value={personDetails.phone}
						/>
					</Grid>
					<Divider />
					<Grid height={{ md: 60, lg: 30 }} container>
						<HcardDetailsLabeledValue
							hCardClassName="street-address"
							label="ADDRESS"
							value={combineStringsWithSpaceBetween(
								personDetails.streetNumber,
								personDetails.streetName
							)}
						/>
					</Grid>
					<Divider />
					<Grid height={{ xs: 60, md: 30 }} container>
						<HcardDetailsLabeledValue
							hCardClassName="region"
							label=""
							value={combineStringsWithSpaceBetween(
								personDetails.suburb ? personDetails.suburb + "," : undefined,
								personDetails.state
							)}
						/>
					</Grid>
					<Divider />
					<Grid height={{ xs: 60, md: 30 }} container>
						<Grid item md={12} lg={6}>
							<Grid container>
								<Grid xs={4} display="flex" alignItems={"center"} item>
									<Typography
										className="postal-code"
										variant="overline"
										color={"grey"}
									>
										POSTCODE
									</Typography>
								</Grid>
								<Grid item xs={3} display="flex" alignItems={"center"}>
									<Typography
										className="country-name"
										id="POSTCODE-preview-value"
									>
										{personDetails.postCode}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={12} lg={6}>
							<Grid container>
								<Grid xs={4} display="flex" alignItems={"center"} item>
									<Typography variant="overline" color={"grey"}>
										COUNTRY
									</Typography>
								</Grid>
								<Grid item xs={3} display="flex">
									<Typography id="COUNTRY-preview-value">
										{personDetails.country}
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
