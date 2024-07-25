import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./GoogleSpreadsheetWidget.css";

function GoogleSpreadsheetWidget() {
  const [url, setUrl] = useState("");
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleSetUrl = () => {
    if (url) {
      setIsEmbedded(true);
    }
  };

  return (
    <Box className="google-spreadsheet-widget" sx={{ p: 3, borderRadius: 2, boxShadow: 3, textAlign: "center", maxWidth: 600, m: "auto" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Google Spreadsheet
      </Typography>
      {!isEmbedded ? (
        <Box className="set-url" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <TextField
            variant="outlined"
            label="Google Spreadsheet URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ mr: 2, width: "70%" }}
          />
          <Button className="custom-button"variant="contained" color="primary" onClick={handleSetUrl}>
            Embed
          </Button>
        </Box>
      ) : (
        <Box className="spreadsheet-container" sx={{ mt: 2 }}>
          <iframe
            src={url.replace("/edit", "/pubhtml")}
            frameBorder="0"
            allowFullScreen
            title="Google Spreadsheet"
            style={{ width: "100%", height: "400px", borderRadius: "10px" }}
          ></iframe>
        </Box>
      )}
    </Box>
  );
}

export default GoogleSpreadsheetWidget;
