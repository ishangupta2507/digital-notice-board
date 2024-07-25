import React from 'react';
import './GoogleCalenderWidget.css'; 
const GoogleCalendarWidget = () => {
  return (
    <div className="calendar-widget">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=250&wkst=1&bgcolor=%23C0CA33&ctz=Asia%2FKolkata&src=YOUR_CALENDAR_ID&color=%23039BE5&showTitle=0&showPrint=0&showCalendars=0&showTz=0&mode=AGENDA"
        style={{ border: 'none', width: '100%', height: '100%' }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendarWidget;
