import React from 'react';
import QuestionList from './components/QuestionList';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <QuestionList />
      </Container>
    </>
  );
};

export default App;
