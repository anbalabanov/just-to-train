'use client'
import {radioList} from "@/app/radio";
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import {setCurrentStationIdState} from "@/app/redux/slices/station-slice";

export default function Home() {
    const dispatch = useAppDispatch();

    const currentStationId = useAppSelector((store) => store.stationReducer.currentStation.id)

    const handleClick = (e: any) => {
        dispatch(setCurrentStationIdState(+e.target.dataset.id))
    }

    return (
        <main>
            <div
                className="h-screen inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
                <div className="mb-10 mt-5 flex flex-wrap justify-start fixed">

                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>
                    <button
                        className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600">
                        Position
                    </button>


                </div>


                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-x-8"
                        onClick={handleClick}>
                        {radioList.map(({name, id}) => {
                            return (
                                <div key={id}
                                     className={`rounded-lg ${currentStationId === id ? "dark:bg-indigo-500 bg-gray-200 text-indigo-500 dark:text-slate-300" : "bg-slate-50 dark:bg-slate-800"}  rounded-lg p-6   cursor-pointer`}
                                     data-id={id}
                                >
                                    {name}

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
