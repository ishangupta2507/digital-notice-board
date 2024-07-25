import React, { useState } from 'react';
import './GoogleSlides.css';

function GoogleSlides() {
  const [url, setUrl] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(true);

  const handleSetUrl = () => {
    if (url) {
      setIsEmbedded(true);
    }
  };

  return (
    <div className="google-slides-widget">
      
      {!isEmbedded ? (
        <div className="set-url">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Google Slides URL"
          />
          <button onClick={handleSetUrl}>Embed</button>
        </div>
      ) : (
        <div className="slides-container">
          <iframe
            src={'https://docs.google.com/presentation/d/1dSeOEenzUF8u5wYQp2L2DzGndqj0mSbWxatCGNAGcMk/edit?usp=sharing'.replace('/edit', '/embed')}
            frameBorder="0"
            allowFullScreen
            title="Google Slides"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default GoogleSlides;
