"use client"
import React from 'react';
import {radioList} from "@/app/radio";
import {Station} from "@/app/components/common/stations/station/Station";
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import {setCurrentStationIdState} from "@/app/redux/slices/station-slice";

export const Stations = () => {
    const dispatch = useAppDispatch();

    const currentStationId = useAppSelector((store) => store.stationReducer.currentStation.id) ?? 0;

    const handleClick = (e: any) => {
        dispatch(setCurrentStationIdState(+e.target.dataset.id))
    }

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div
                className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-x-8"
                onClick={handleClick}>
                {radioList.map(({id, name}) => <Station name={name} stationId={id} currentStationId={currentStationId} />)}
            </div>
        </div>
    );
};

