"use client"
import React from 'react';

type Props = {
    name: string,
    stationId: number,
    currentStationId: number,
}

export const Station = ({ name, stationId, currentStationId }: Props) => {
    return (
        <div key={stationId}
             className={`rounded-lg ${currentStationId === stationId ? "dark:bg-indigo-500 bg-gray-200 text-indigo-500 dark:text-slate-300" : "bg-slate-50 dark:bg-slate-800"}  rounded-lg p-6   cursor-pointer`}
             data-id={stationId}
        >
            {name}
        </div>
    );
};

