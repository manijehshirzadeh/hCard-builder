import { Divider, Grid, Typography } from "@mui/material"

export function UnderlinedTitle({ title }: { title: string }) {
	return (
		<Grid item xs={12}>
			<Typography variant="body2" color="grey.400" mt={3}>
				{title}
			</Typography>
			<Divider />
		</Grid>
	)
}
