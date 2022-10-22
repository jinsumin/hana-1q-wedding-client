import React from "react";

const Intro1 = () => {
  const videoObjectSrc = "videos/main-intro-video.mp4";

  return (
    <div id="main-section" className="bg-gray-100">
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-100"
        >
          <source src={videoObjectSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Intro1;
