import React, { useEffect, useRef } from "react";

const BackgroundSound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Audio playback failed:", error);
        }
      }
    };

    playAudio();
  }, []); // Empty dependency array, para tumakbo lang isang beses sa initial render

  return (
    <audio ref={audioRef} src="/bgsound.mp3" loop muted>
      Your browser does not support the <code>audio</code> element.
    </audio>
  );
};

export default BackgroundSound;
