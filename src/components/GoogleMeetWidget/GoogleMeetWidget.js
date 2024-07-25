import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './GoogleMeetWidget.css';

function GoogleMeetWidget() {
  const [meetUrl, setMeetUrl] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinMeeting = () => {
    if (meetUrl) {
      setIsJoined(true);
    }
  };

  return (
    <Box className="google-meet-widget" sx={{ p: 3, borderRadius: 2, boxShadow: 3, textAlign: 'center', maxWidth: 600, m: 'auto' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Google Meet
      </Typography>
      {!isJoined ? (
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
      ) : (
        <Box className="meet-container" sx={{ mt: 2 }}>
          <iframe
            src={meetUrl}
            frameBorder="0"
            allow="camera; microphone; fullscreen; display-capture"
            title="Google Meet"
            style={{ width: '50%', height: '400px', borderRadius: '10px' }}
          ></iframe>
        </Box>
      )}
    </Box>
  );
}

export default GoogleMeetWidget;
