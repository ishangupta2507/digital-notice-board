import React, { useState } from "react";
import { Box, Button, TextField, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import "./PollWidget.css";

function PollWidget() {
  
  const defaultQuestion = "What's your favorite programming language?";
  const defaultOptions = ["JavaScript", "Python"];

  
  const [question, setQuestion] = useState(defaultQuestion);
  const [options, setOptions] = useState(defaultOptions);
  const [submitted, setSubmitted] = useState(true); // Default to showing the poll
  const [selectedOption, setSelectedOption] = useState("");

  
  const handleQuestionChange = (event) => setQuestion(event.target.value);

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, ""]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleVote = () => {
    alert(`You voted for: ${selectedOption}`);
  };

  return (
    <Box className="poll-widget" sx={{ p: 3, borderRadius: 2, boxShadow: 3, textAlign: "center", maxWidth: 600, m: "auto" }}>
      {!submitted ? (
        <>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Create a Poll
          </Typography>
          <TextField
            variant="outlined"
            label="Poll Question"
            value={question}
            onChange={handleQuestionChange}
            sx={{ mb: 2, width: "100%" }}
          />
          {options.map((option, index) => (
            <TextField
              key={index}
              variant="outlined"
              label={`Option ${index + 1}`}
              value={option}
              onChange={(event) => handleOptionChange(index, event)}
              sx={{ mb: 2, width: "100%" }}
            />
          ))}
          <Button variant="outlined" onClick={addOption} sx={{ mb: 2 }}>
            Add Option
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Poll
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {question}
          </Typography>
          <RadioGroup value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
            {options.map((option, index) => (
              <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          <Button variant="contained" className="vote-button"color="primary" onClick={handleVote} disabled={!selectedOption}>
            Vote
          </Button>
        </>
      )}
    </Box>
  );
}

export default PollWidget;
