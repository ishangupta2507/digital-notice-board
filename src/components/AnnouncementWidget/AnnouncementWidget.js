import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import "./AnnouncementWidget.css";

const announcements = [
  { id: 1, text: "Don't forget to submit your timesheets by Friday." },
  { id: 2, text: "Team meeting scheduled for Monday at 10 AM." },
  { id: 3, text: "Office will be closed on Wednesday for maintenance." },
  { id: 4, text: "New company policies will be effective from next month." },
  { id: 5, text: "Annual company picnic on Saturday. Join us for fun and games!" },
];

function AnnouncementWidget() {
  return (
    <Paper className="announcement-widget" elevation={3}>
      <Typography variant="h6" className="announcement-heading">
        Announcements
      </Typography>
      <Box className="announcement-container">
        {announcements.map((announcement) => (
          <Typography key={announcement.id} className="announcement-text">
            {announcement.text}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
}

export default AnnouncementWidget;
