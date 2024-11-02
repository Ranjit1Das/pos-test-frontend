// components/Dashboard/Sidebar.tsx
'use client';
import React from 'react';
import {
  List,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../lib/context/AuthContext';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Box
      sx={{
        width: '250px',
        color: 'black',
        borderRight: '1px solid #eeeeee',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#333',
            mb: 2,
            pl: 1,
          }}
        >
          Admin Panel
        </Typography>
        <List>
          <ListItem
            component="div"
            onClick={() => router.push('/admindash')}
            sx={{
              padding: '10px 16px',
              marginBottom: 1,
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ fontSize: '0.9rem' }} />
          </ListItem>

          <ListItem
            component="div"
            onClick={() => router.push('/orders')}
            sx={{
              padding: '10px 16px',
              marginBottom: 1,
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <ListItemIcon>
              <ReceiptIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Orders" sx={{ fontSize: '0.9rem' }} />
          </ListItem>

          <ListItem
            component="div"
            onClick={() => router.push('/customers')}
            sx={{
              padding: '10px 16px',
              marginBottom: 1,
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <ListItemIcon>
              <PeopleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Customers" sx={{ fontSize: '0.9rem' }} />
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem
            component="div"
            onClick={() => router.push('/settings')}
            sx={{
              padding: '10px 16px',
              marginBottom: 1,
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <ListItemIcon>
              <SettingsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ fontSize: '0.9rem' }} />
          </ListItem>

          <ListItem
            component="div"
            onClick={() => router.push('/help')}
            sx={{
              padding: '10px 16px',
              marginBottom: 1,
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <ListItemIcon>
              <HelpCenterIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Help Center" sx={{ fontSize: '0.9rem' }} />
          </ListItem>

          <ListItem
            component="div"
            onClick={logout}
            sx={{
              padding: '10px 16px',
              marginBottom: 1,
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <ListItemIcon>
              <LogoutIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ fontSize: '0.9rem' }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
