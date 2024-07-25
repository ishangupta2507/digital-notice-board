
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './BookWidget.css'; // Import the CSS file for styling

const BookWidget = () => {
  // Sample book and quote data
  const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote: "You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it."
  };

  return (
    <Box className="book-quote-widget">
      <Paper elevation={3} className="widget-content">
        <Typography variant="h6" className="book-title">{book.title}</Typography>
        <Typography variant="subtitle1" className="book-author">by {book.author}</Typography>
        <Typography variant="body1" className="book-quote">"{book.quote}"</Typography>
      </Paper>
    </Box>
  );
};

export default BookWidget;
