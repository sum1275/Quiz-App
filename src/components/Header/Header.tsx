import { Link } from "react-router-dom";
import { Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      textTransform: 'uppercase',
      fontSize: '8vw',
      cursor: 'pointer',
      textAlign:'center'
      
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <Link to="/" className="title">
          <Typography variant="h1">Trivia Wars</Typography>
        </Link>
        <Divider sx={{ margin: '10px', width: '100%', backgroundColor: 'grey' }} />
      </div>
    </ThemeProvider>
  );
};

export default Header;