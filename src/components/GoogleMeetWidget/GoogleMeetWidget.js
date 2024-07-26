import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './GoogleMeetWidget.css';

function GoogleMeetWidget() {
  const [meetUrl, setMeetUrl] = useState('');

  const handleJoinMeeting = () => {
    if (meetUrl) {
      window.open(meetUrl, '_blank');
    }
  };

  return (
    <Box className="google-meet-widget" sx={{ p: 3, borderRadius: 2, boxShadow: 3, textAlign: 'center', maxWidth: 600, m: 'auto' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Google Meet
      </Typography>
      <Box className="set-meet-url" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          label="Google Meet URL"
          value={meetUrl}
          onChange={(e) => setMeetUrl(e.target.value)}
          sx={{ mr: 2, width: '50%' }}
        />
        <Button variant="contained" color="primary" onClick={handleJoinMeeting}>
          Join
        </Button>
      </Box>
    </Box>
  );
}

export default GoogleMeetWidget;
