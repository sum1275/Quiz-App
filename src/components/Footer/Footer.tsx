import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        <Typography variant="body1" align="center">
          Made by{" "}
          <Link
            to="https://github.com/sum1275"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            Sumit Kumar Sinha
          </Link>
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
