import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Vitti360
        </Typography>
        <Box>
          <IconButton color="inherit" href="https://www.facebook.com/samamun60" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com/shamim2601" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/shamim2601" target="_blank">
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
