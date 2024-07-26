import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./GoogleSpreadsheetWidget.css";

function GoogleSpreadsheetWidget() {
  const [url, setUrl] = useState("");

  const handleOpenInNewTab = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Box className="google-spreadsheet-widget" sx={{ p: 3, borderRadius: 2, boxShadow: 3, textAlign: "center", maxWidth: 600, m: "auto" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Google Spreadsheet
      </Typography>
      <Box className="set-url" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TextField
          variant="outlined"
          label="Google Spreadsheet URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          sx={{ mr: 2, width: "70%" }}
        />
        <Button className="custom-button" variant="contained" color="primary" onClick={handleOpenInNewTab}>
          Open
        </Button>
      </Box>
    </Box>
  );
}

export default GoogleSpreadsheetWidget;
