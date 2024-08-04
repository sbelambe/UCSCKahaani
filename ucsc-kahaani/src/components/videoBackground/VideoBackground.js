// src/VideoBackground.js
import React from 'react';
import './VideoBackground.css';

function VideoBackground() {
  return (
    <div className="video-background">
      <div class="title">
        <div class="kahaani">UCSC Kahaani</div>
        <div class="description">Premiere Bollywood Fusion Dance Team at UC Santa Cruz</div>
      </div>
      <video autoPlay loop muted className="video-background__video">
        <source src={`${process.env.PUBLIC_URL}/kahaani.mov`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
