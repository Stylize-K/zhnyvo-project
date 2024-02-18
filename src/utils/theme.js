import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#FFFFFF",
    95: "#DBFCA7",
    90: "#CDEE9A",
    80: "#B1D181",
    70: "#97B568",
    60: "#7D9A50",
    50: "#648039",
    40: "#4C6723",
    30: "#354E0C",
    20: "#213600",
    10: "#121F00",
    0: "#000000",
  },

  secondary: {
    100: "#FFFFFF",
    95: "#DFF4D9",
    90: "#D3E6CC",
    80: "#B7CAB1",
    70: "#9CAE96",
    60: "#81947D",
    50: "#687A64",
    40: "#50614D",
    30: "#394936",
    20: "#233321",
    10: "#0F1E0E",
    0: "#000000",
  },
  tertiary: {
    100: "#FFFFFF",
    95: "#F0EFFF",
    90: "#DDE1FF",
    80: "#BBC4F6",
    70: "#A0A9D9",
    60: "#858EBD",
    50: "#6C75A2",
    40: "#535C88",
    30: "#3B446F",
    20: "#242E57",
    10: "#0E1841",
    0: "#000000",
  },
  neutral: {
    100: "#FFFFFF",
    95: "#F0F1F4",
    90: "#E3E4E8",
    80: "#C9CBCF",
    70: "#A7A9AF",
    60: "#929499",
    50: "#797C81",
    40: "#5D6065",
    30: "#474A4D",
    20: "#303336",
    10: "#1C1F21",
    0: "#000000",
  },
  neutralVariant: {
    100: "#FFFFFF",
    95: "#F4F0F0",
    90: "#E5E1E2",
    80: "#C9C6C6",
    70: "#ADAAAB",
    60: "#929091",
    50: "#797677",
    40: "#5D6065",
    30: "#484647",
    20: "#313031",
    10: "#1C1B1C",
    0: "#000000",
  },
  error: {
    100: "#FFFFFF",
    95: "#FCEEEE",
    90: "#F9DEDC",
    80: "#F2B8B5",
    70: "#EC928E",
    60: "#E46962",
    50: "#DC362E",
    40: "#B3261E",
    30: "#8C1D18",
    20: "#601410",
    10: "#410E0B",
    0: "#000000",
  },
  valid: {
    100: "#FFFFFF",
    95: "#F1FDF5",
    90: "#E2FAEA",
    80: "#B3F2C9",
    70: "#8BEDAD",
    60: "#5EE48D",
    50: "#2DDD6A",
    40: "#1DAD4E",
    30: "#188F42",
    20: "#12652F",
    10: "#0B411E",
    0: "#000000",
  },
};

export const theme = createTheme({
  mode: "light",
  palette: {
    primary: {
      main: shades.primary[95],
      light: shades.primary[95],
      dark: shades.primary[90],
      contrastText: shades.primary[10],
    },
    secondary: {
      main: shades.secondary[95],
    },
    neutral: {
      dark: shades.neutral[20],
    },
    neutralVariant: {
      main: shades.neutralVariant[50],
    },
    tertiary: {
      main: shades.tertiary[40],
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: shades.tertiary[40],
        textDecoration: "none",
      },
    },
    MuiFormControl: {
      root: {
        height: "48px",
      },
    },
    MuiInputBase: {
      root: {
        height: "48px",
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: shades.neutral.text, // Set default text color for Typography
        },
      },
    },
  },
  typography: {
    fontFamily: ["Mulish", "Philosopher", "sans-serif"].join(","),
  },
});
