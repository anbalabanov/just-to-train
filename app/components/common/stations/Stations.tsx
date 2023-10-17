"use client";
import React from "react";
import { radioList } from "@/app/radio";
import { Station } from "@/app/components/common/stations/station/Station";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { setCurrentStationIdState } from "@/app/redux/slices/station-slice";

export const Stations = () => {
  const dispatch = useAppDispatch();

  const currentStationId =
    useAppSelector((store) => store.stationReducer.currentStation.id) ?? 0;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    const parent = e.target.parentNode;

    if (!parent || !(parent instanceof HTMLElement)) {
      return;
    }

    const id = parent.dataset.id;

    if (id) {
      dispatch(setCurrentStationIdState(+id));
    }
  };

  return (
    <div
      className="container mx-auto pt-8 lg:pt-16 px-6 sm:px-10 md:px-12 lg:px-18 xl:px-20 2xl:px-24
    pb-20 sm:pb-24 md:pb-32 lg:pb-36 xl:pb-40 2xl:pb-44"
    >
      <div
        className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8"
        onClick={handleClick}
      >
        {radioList.map(({ id, name }) => (
          <Station
            data-id={id}
            key={name}
            name={name}
            stationId={id}
            currentStationId={currentStationId}
          />
        ))}
      </div>
    </div>
  );
};
