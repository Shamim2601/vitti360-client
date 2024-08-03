import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List, Typography, CircularProgress } from '@mui/material';
import Question from './Question';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://vitti360-server.vercel.app/jiggasa')
      .then(response => {
        setQuestions(response.data.questions);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the questions:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Questions
      </Typography>
      <List>
        {questions.map(question => (
          <Question key={question._id} question={question} />
        ))}
      </List>
    </Container>
  );
};

export default QuestionList;
