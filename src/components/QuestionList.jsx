import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, Typography, CircularProgress } from '@mui/material';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://vitti360-server.vercel.app/jiggasa')
      .then(response => {
        console.log(response.data.questions)
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
          <ListItem key={question._id}>
            <ListItemText
              primary={question.questionText}
              secondary={`Category: ${question.category}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default QuestionList;
