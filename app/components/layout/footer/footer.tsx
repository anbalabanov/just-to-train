"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { radioList } from "@/app/radio";
import useAudio from "@/app/hooks/useAudio";
import { Volume } from "@/app/components/elements/Volume";
import { PlayIcon } from "@heroicons/react/24/outline";
import { PauseIcon } from "@heroicons/react/24/outline";

function Footer() {
  const currentStationId = useAppSelector(
    (store) => store.stationReducer.currentStation.id,
  );

  const { playing, toggle, toggleMute, mute } = useAudio(
    radioList.find(({ id }) => id === currentStationId)?.url ?? "",
  );

  return (
    <footer className="fixed inset-x-0 bottom-0 bg-no-repeat dark:bg-slate-900/75">
      <div className="shadow-lg rounded-lg">
        <div className="w-full p-6">
          <div className="grid grid-cols-3 items-center justify-end justify-items-center md:grid-cols-3 h-full">
            <div className="hover:text-sky-500 dark:hover:text-sky-400">
              <h3 className="text-2xl font-medium">A Sky Full of Stars</h3>
              <p className="text-sm mt-1">Ghost Stories</p>
            </div>
            <div
              className="p-8 rounded-full bg-red-light shadow-lg cursor-pointer hover:text-sky-500 dark:hover:text-sky-400"
              onClick={toggle}
            >
              {playing ? (
                <PauseIcon className="w-6 h-6" />
              ) : (
                <PlayIcon className="w-6 h-6" />
              )}
            </div>
            <div className="hover:text-sky-500 dark:hover:text-sky-400">
              <Volume mute={mute} toggleMute={toggleMute} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
