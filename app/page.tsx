import StationFilter from "@/app/components/common/station-filter/StationFilter";
import {Stations} from "@/app/components/common/stations/Stations";

export default function Home() {
    return (
        <main>
            <div className="h-screen inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
                <StationFilter />
                <Stations />
            </div>
        </main>
    );
}
