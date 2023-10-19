type Props = {
  name: string;
  stationId: number;
  currentStationId: number;
};

export const Station = ({ name, stationId, currentStationId }: Props) => {
  return (
    <section
      data-id={stationId}
      className={`block rounded-lg shadow-2xl hover:shadow-sky-400 text-center transition duration-600 ease-in-out  ${
        currentStationId === stationId
          ? "bg-sky-200 dark:bg-indigo-800 hover:bg-sky-100 hover:dark:bg-indigo-700 shadow-sky-400"
          : "bg-white dark:bg-slate-800 hover:bg-sky-100 hover:dark:bg-indigo-700"
      } cursor-pointer`}
    >
      <div className="p-6">LOGO</div>

      <div
        className="border-t-2 border-neutral-100 px-1
           py-2 dark:border-neutral-500 flex items-center justify-center text-neutral-500 dark:text-neutral-300"
      >
        {name}
      </div>
    </section>
  );
};
