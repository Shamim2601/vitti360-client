import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} bgcolor="primary.main" color="white">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Vitti360. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <a href="mailto:shamim2601@gmail.com" style={{ color: 'white' }}>Contact Us</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
