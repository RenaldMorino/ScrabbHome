import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";
import ScrabbleBoard from "./components/ScrabbleBoard/ScrabbleBoard";
import UserLetterRack from "./components/UserLetterRack/UserLetterRack";

const theme = createTheme({});
const useStyles = makeStyles((theme) => ({}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ScrabbleBoard />
        <UserLetterRack />
      </div>
    </ThemeProvider>
  );
}

export default App;
