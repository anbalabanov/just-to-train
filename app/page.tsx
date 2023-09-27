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
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-x-8"
                        onClick={handleClick}>
                        {radioList.map(({name, id}) => {
                            return (
                                <div key={id}
                                     className={`rounded-lg ${currentStationId === id ? "bg-gray-400" : "bg-gray-200"} hover:bg-gray-400 h-20 w-36 text-center space-x-2 cursor-pointer`}
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
