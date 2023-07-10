import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ContactsIcon from '@mui/icons-material/Contacts';
export default function Navigation() {
  return (
    <AppBar position="static" className="menu">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Navigation Bar
        </Typography>


        <Button color="inherit" component={Link} to="/">
          <Typography>Home</Typography><HouseIcon/>
        </Button>

        <Button color="inherit" component={Link} to="/dashboard">
        <Typography>Dashboard</Typography><DashboardCustomizeIcon/>
        </Button>

        <Button color="inherit" component={Link} to="/contact">
        <Typography>Contact</Typography><ContactsIcon/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
