import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../store"
import { buildAppTheme } from "../theme/buildAppTheme"
import { ThemeProvider } from "@mui/material"

export default function App({ Component, pageProps }: AppProps) {
	const theme = buildAppTheme()
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}
