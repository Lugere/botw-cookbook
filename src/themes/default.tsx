import { extendTheme } from "@mui/joy/styles";

const defaultTheme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidActiveBg: "red",
                },
            },
        },
    },
});

export default defaultTheme;
