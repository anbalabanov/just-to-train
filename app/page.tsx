import StationFilter from "@/app/components/common/station-filter/StationFilter";
import { Stations } from "@/app/components/common/stations/Stations";
// bg-gradient-to-tl from-sky-900 via-neutral-500 to-black //bg-gradient-to-bl from-green-200 via-transparent to-sky-200
export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <StationFilter />
        <Stations />
      </div>
    </main>
  );
}
