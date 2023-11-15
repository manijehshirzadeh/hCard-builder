import { Grid, Typography } from "@mui/material"

export function HcardDetailsLabeledValue({
	label,
	value
}: {
	label: string
	value: string | null | number
}) {
	return (
		<>
			<Grid xs={12} md={2} display="flex" alignItems="center" item>
				<Typography variant="overline" color="grey">
					{label}
				</Typography>
			</Grid>
			<Grid xs={0} md={10} item display="flex" alignItems="center">
				<Typography>{value}</Typography>
			</Grid>
		</>
	)
}
