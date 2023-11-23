import Head from "next/head"
import { HcardBuilderForm } from "@/components/HcardBuilderForm"
import { Grid } from "@mui/material"
import { HcardPreviewCard } from "@/components/HcardPreviewCard"

export default function Home() {
	return (
		<>
			<Head>
				<title>hCard Builder</title>
				<meta
					name="description"
					content="Generated by create next app to build a hCard"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Grid container height={{ md: "100vh" }}>
					<Grid item xs={12} md={6} mb={{ xs: 2 }}>
						<HcardBuilderForm />
					</Grid>
					<Grid sx={{ backgroundColor: "#E6E7EB" }} item xs={12} md={6}>
						<HcardPreviewCard />
					</Grid>
				</Grid>
			</main>
		</>
	)
}
