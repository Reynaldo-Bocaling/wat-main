import React, { useEffect, useRef } from "react";

const BackgroundSound = ({
  isContinue,
  playContinue,
}: {
  isContinue: boolean;
  playContinue: () => void;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Set the volume level here (0.0 to 1.0)
      audioRef.current.volume = 0.025; // Example: 20% volume

      if (isContinue) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Optional: reset the playback to start
      }
    }
  }, [isContinue]);

  return (
    <>
      {/* Audio element with adjusted volume */}
      <audio ref={audioRef} src="/bgsound.mp3" loop />

      {!isContinue && (
        <div className="h-full w-full fixed top-0 left-0 right-0 bottom-0 flex flex-col gap-10 items-center justify-center bg-[rgba(0,0,0,0.8)] z-[99]">
          <button
            onClick={playContinue}
            className="neon-text-extra text-[10rem] md:text-[3.5rem] font-bold text-left mb-4 mt-5 heartbeat "
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default BackgroundSound;
