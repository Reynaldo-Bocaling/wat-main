import React from "react";

const BackgroundSound = ({
  isContinue,
  playContinue,
}: {
  isContinue: boolean;
  playContinue: () => void;
}) => {
  const music = new Audio("/bgsound.mp3");

  if (isContinue) {
    music.play();
    console.log(isContinue, "playu");
  }

  return (
    <>
      {!isContinue && (
        <div className="h-full w-full fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)] z-[99]">
          <button
            onClick={playContinue}
            className="neon-text-title text-[8rem] md:text-[3.5rem] font-bold text-left mb-4 mt-5 heartbeat"
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default BackgroundSound;
