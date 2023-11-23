import { createTheme } from "@mui/material/styles"
export function buildAppTheme() {
	return createTheme({
		palette: {
			primary: {
				light: "#3DA9E3",
				main: "#0087CC",
				dark: "#374D61"
			},
			secondary: {
				light: "#4DA6D6",
				main: "#778C99",
				dark: "#374D61"
			},
			error: {
				light: "#ffebee",
				main: "#b71c1c",
				dark: "#7f0000"
			},
			warning: {
				light: "#fff3e0",
				main: "#E65100",
				dark: "#ac1900"
			},
			success: {
				light: "#e8f5e9",
				main: "#2e7d32",
				dark: "#005005"
			},
			info: {
				light: "#e3f2fd",
				main: "#0091EA",
				dark: "#0069c0"
			},
			background: {
				default: "#E6E7EB"
			},
			text: {
				disabled: "rgba(0, 0, 0, 0.25)"
			}
		}
	})
}
