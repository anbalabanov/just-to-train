"use client";
import React from "react";

type Props = {
  name: string;
  stationId: number;
  currentStationId: number;
};

export const Station = ({ name, stationId, currentStationId }: Props) => {
  return (
    <div
      data-id={stationId}
      className={`block rounded-lg bg-white shadow-2xl text-center  ${
        currentStationId === stationId
          ? "dark:bg-indigo-500"
          : "dark:bg-slate-800"
      } cursor-pointer`}
    >
      <div className="p-6" data-id={stationId}>
        LOGO
      </div>

      <div
        className="border-t-2 border-neutral-100 px-1 py-2 dark:border-neutral-500"
        data-id={stationId}
      >
        <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
          <span className="ml-2">{name}</span>
        </h5>
      </div>
    </div>
  );
};
