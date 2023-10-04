import React, { ChangeEvent } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { setVolumeState, toggleMute } from "@/app/redux/slices/station-slice";

export const Volume = () => {
  const dispatch = useAppDispatch();
  const volume = useAppSelector(
    (store) => store.stationReducer.currentStation.volume,
  );
  const handleVolumeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolumeState(+target.value));
  };

  const handleMute = () => {
    dispatch(toggleMute());
  };

  return (
    <div className="flex items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={handleMute}
      >
        {volume === 0 ? <SpeakerXMarkIcon /> : <SpeakerWaveIcon />}
      </svg>
      <input
        id="default-range"
        onChange={handleVolumeChange}
        type="range"
        value={volume}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};
