import React from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import GoogleSlides from "./components/GoogleSlides/GoogleSlides";
import MusicWidget from "./components/MusicWidget/MusicWidget";
import GoogleCalendarWidget from "./components/GoogleCalenderWidget/GoogleCalenderWidget";
import GoogleMeetWidget from "./components/GoogleMeetWidget/GoogleMeetWidget";
import PollWidget from "./components/PollWidget/PollWidget";
import AnnouncementWidget from "./components/AnnouncementWidget/AnnouncementWidget";
import GoogleSpreadsheetWidget from "./components/GoogleSpreadsheetWidget/GoogleSpreadsheetWidget";
import DailyGrowthChecklist from "./components/DailyGrowthChecklist/DailyGrowthChecklist";
import BookWidget from "./components/BookWidget/BookWidget";
import ChatBotWidget from "./components/ChatBotWidget/ChatBotWidget";

function App() {
  return (
    <Container className="app" sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <DailyGrowthChecklist />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <GoogleCalendarWidget />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <GoogleSlides />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <PollWidget />
        </Grid>

        <Grid item xs={12} sm={3} md={6}>
          <AnnouncementWidget />
        </Grid>
        <Grid item xs={12} sm={3} md={6}>
          <PomodoroTimer />
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <GoogleMeetWidget />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <MusicWidget />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <BookWidget />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <GoogleSpreadsheetWidget />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
