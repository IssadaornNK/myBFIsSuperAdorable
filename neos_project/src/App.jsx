import { Box } from "@mui/material";
import Nav from "./components/Nav"
import Content from './components/Content';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import "./App.css";


function App() {
  return (
    <div className="App">
     <Box>
      <Nav />
      <Content/>
    </Box>
    </div>
  );
}

export default App;
