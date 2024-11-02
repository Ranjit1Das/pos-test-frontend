// components/Dashboard/TopNavBar.tsx
'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  InputBase,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

// Style the search wrapper
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(0.5, 2),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  paddingRight: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
  color: theme.palette.grey[600],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
}));

const TopNavBar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        boxShadow: 'none',
        backgroundColor: 'white',
        borderBottom: '1px solid #eeeeee',
        minHeight: '64px',
      }}
    >
      <Toolbar disableGutters sx={{ width: '100%', px: 2 }}>
        <Grid container alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
          {/* Left: Dashboard Title */}
          <Grid size={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '1.2rem',
                color: 'text.primary',
              }}
            >
              Restaurant POS Dashboard
            </Typography>
          </Grid>

          {/* Center: Search Bar */}
          <Grid size={6} sx={{ flexGrow: 1 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize="small" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ fontSize: '0.9rem' }}
              />
            </Search>
          </Grid>

          {/* Right: Notifications and Profile Icon */}
          <Grid
            size={3}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton color="inherit" sx={{ p: 1 }}>
              <NotificationsIcon fontSize="medium" />
            </IconButton>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                alt="Profile Picture"
                src="https://en.tengrinews.kz/userdata/news_en/2024/news_263700/thumb_b/photo_52942.jpeg"
                sx={{ width: 36, height: 36 }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: '0.9rem',
                  lineHeight: 1.2,
                  textAlign: 'right',
                }}
              >
                Ranjit Das
                <br />
                <Typography variant="caption" color="text.secondary">
                  Admin
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
