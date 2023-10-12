"use client";

export const Equalizer = ({ playing }: { playing: boolean }) => {
  return (
    <div className="flex justify-center w-24 rotate-180 ml-2">
      {playing && (
        <div className="flex justify-between align-middle w-20">
          <div className="relative w-2 h-4 bg-sky-400 animate-upDown1 ml-2"></div>
          <div className="relative w-2 h-4 bg-sky-400 animate-upDown2 ml-2"></div>
          <div className="relative w-2 h-4 bg-sky-400 animate-upDown3 ml-2"></div>
          <div className="relative w-2 h-4 bg-sky-400 animate-upDown4 ml-2"></div>
          <div className="relative w-2 h-4 bg-sky-400 animate-upDown5 ml-2"></div>
        </div>
      )}
    </div>
  );
};
