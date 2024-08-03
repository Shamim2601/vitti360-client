import React from 'react';
import QuestionList from './components/QuestionList';
import Header from './components/Header';
import Footer from './components/Footer';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <QuestionList />
      </Container>
      <Footer />
    </>
  );
};

export default App;
