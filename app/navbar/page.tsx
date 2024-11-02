'use client';
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

// Styling for the search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  marginLeft: theme.spacing(1),
  width: '100%',
  maxWidth: '600px', // Max width for larger screens
  transition: theme.transitions.create(['width', 'background-color']),
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    marginLeft: theme.spacing(0),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(
  ({ theme, focus }: { theme: any; focus: boolean }) => ({
    color: 'inherit',
    width: focus ? '100%' : '20ch',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
    },
  })
);

const TopNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <AppBar
      position="static"
      color="default"
      sx={{ boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* Left: Company Logo */}
        <Box display="flex" alignItems="center" sx={{ mb: isMobile ? 1 : 0 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#333', fontWeight: 'bold' }}
          >
            CompanyLogo
          </Typography>
        </Box>

        {/* Center: Search Bar */}
        <Search sx={{ my: isMobile ? 1 : 0 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            focus={searchFocus}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            theme={undefined}
          />
        </Search>

        {/* Right: Notifications and Profile Icon */}
        <Box display="flex" alignItems="center" sx={{ mt: isMobile ? 1 : 0 }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <Avatar
              alt="Profile Picture"
              src="https://en.tengrinews.kz/userdata/news_en/2024/news_263700/thumb_b/photo_52942.jpeg"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
