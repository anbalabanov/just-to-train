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

            <div className="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
                <div className="mt-20 font-medium py-1 px-2  rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">Hello!</div>
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
