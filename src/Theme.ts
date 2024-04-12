import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#8B4513',
      },
      secondary: {
        main: '#D2691E',
      }
    },

    typography:{
        fontFamily: "Helvetica Neue"
    }
  });

  theme = responsiveFontSizes(theme);
  
  export default theme;