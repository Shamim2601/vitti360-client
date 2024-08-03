import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const Question = ({ question }) => {
  return (
    <ListItem>
      <ListItemText
        primary={question.questionText}
        secondary={`Category: ${question.category}`}
      />
    </ListItem>
  );
};

export default Question;
