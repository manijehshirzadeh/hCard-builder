import { Grid, Typography } from "@mui/material"

export function HcardDetailsLabeledValue({
	label,
	value,
	hCardClassName
}: {
	label: string
	value: JSX.Element | string | undefined | number
	hCardClassName?: string
}) {
	return (
		<>
			<Grid md={12} lg={2} display="flex" alignItems="center" item>
				<Typography variant="overline" color="grey">
					{label}
				</Typography>
			</Grid>
			<Grid
				{...(hCardClassName ? { className: hCardClassName } : undefined)}
				md={0}
				lg={10}
				item
				display="flex"
				alignItems="center"
			>
				<Typography id={`${label}-preview-value`}>{value}</Typography>
			</Grid>
		</>
	)
}
