import React from "react";

function LoadingScreen({ progress }) {
  return (
    <div className="fixed inset-0 flex items-end justify-end px-8 z-[9999] bg-[#3a0822]">
      <p className="font-[font1] text-[8rem] font-bold tracking-3">
        {progress}
      </p>
    </div>
  );
}

export default LoadingScreen;
