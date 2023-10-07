import StationFilter from "@/app/components/common/station-filter/StationFilter";
import { Stations } from "@/app/components/common/stations/Stations";

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
