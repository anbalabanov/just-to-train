"use client";
import { useAppSelector } from "@/app/redux/hooks";
import useAudio from "@/app/hooks/useAudio";
import { Volume } from "@/app/components/elements/Volume";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Equalizer } from "@/app/components/common/equalizer/Equalizer";
import Spinner from "@/app/components/layout/footer/spinner/Spinner";

function Footer() {
  const { name, url } = useAppSelector(
    (store) => store.stationReducer.currentStation,
  );

  const { loading, playing, toggle, mute, toggleMute } = useAudio(url);

  const getPlayIcon = () => {
    if (loading) {
      return <Spinner />;
    }

    return playing ? (
      <PauseIcon className="w-6 h-6" />
    ) : (
      <PlayIcon className="w-6 h-6" />
    );
  };

  return (
    <footer className="fixed inset-x-0 bottom-0 bg-no-repeat dark:bg-slate-900/75 border-t border-slate-900/10 backdrop-blur">
      <div className="shadow-lg rounded-lg">
        <div className="w-full p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5">
          <div className="grid grid-cols-3 items-center justify-end justify-items-center md:grid-cols-3 h-full">
            <div className="hover:text-sky-500 dark:hover:text-sky-400">
              <h3 className="text-l lg:text-2xl font-medium">{name}</h3>
              <p className="text-xs lg:text-sm mt-1">
                {name ? "106.3" : "Just chose a good radio"}
              </p>
            </div>
            <div
              className="p-4 md:p-6 lg:p-8 rounded-full shadow-lg shadow-sky-300 dark:shadow-sky-800
               hover:shadow-sky-400 dark:hover:shadow-sky-600 cursor-pointer hover:text-sky-500
               dark:hover:text-sky-400 border-2 border-sky-200 dark:border-sky-800"
              onClick={toggle}
            >
              {getPlayIcon()}
            </div>
            <div className="hover:text-sky-500 dark:hover:text-sky-400 flex">
              <div className="hidden sm:flex">
                <Volume mute={mute} toggleMute={toggleMute} />
              </div>
              <Equalizer playing={playing && !loading} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
