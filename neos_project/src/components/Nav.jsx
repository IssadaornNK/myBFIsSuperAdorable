import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/moon-phase-20.png"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#20232a"}} position="static">
        <Toolbar>
          
          <img></img>
          <Box sx={{display:{xs:'none',md:'flex'}}}>
          <Button> <img src={logo} style={{ width: 30, height: 30 }}/> </Button>
          <Button color="inherit">Diary</Button>
          <Button color="inherit">Place</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Playlist</Button>
          </Box>
          <Box sx={{display:{xs:'flex', md:'none'}}}>
            <Button sx={{color:'white'}}><MenuIcon /></Button>
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
