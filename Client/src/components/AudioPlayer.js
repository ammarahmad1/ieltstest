// AudioPlayer.js
import React from 'react';

const AudioPlayer = ({ audioSrc }) => {
  return (
    <audio controls>
      <source src={audioSrc} type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer;
