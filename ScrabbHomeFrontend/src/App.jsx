import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";
import ScrabbleBoard from "./components/ScrabbleBoard/ScrabbleBoard";

const theme = createTheme({});
const useStyles = makeStyles((theme) => ({}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ScrabbleBoard />
      </div>
    </ThemeProvider>
  );
}

export default App;
