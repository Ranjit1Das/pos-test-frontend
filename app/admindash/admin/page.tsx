'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';

const drawerWidth = 240;

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Dashboard');

  const sections = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Users', icon: <PeopleIcon /> },
    { text: 'Products', icon: <InventoryIcon /> },
    { text: 'Orders', icon: <ShoppingCartIcon /> },
    { text: 'Reports', icon: <BarChartIcon /> },
  ];

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {sections.map((section) => (
            <ListItem
              key={section.text}
              onClick={() => handleSectionClick(section.text)}
            >
              <ListItemIcon>{section.icon}</ListItemIcon>
              <ListItemText primary={section.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          height: '100%',
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          {selectedSection}
        </Typography>
        <Typography paragraph>
          {`This is the ${selectedSection} section. Replace this text with your ${selectedSection.toLowerCase()} content or components.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
