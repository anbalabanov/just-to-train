import React from "react";

type Props = {
  name: string;
};
export const FilterItem = ({ name }: Props) => {
  return (
    <button
      className="mb-2 mr-2 rounded-2xl bg-gray-200 px-5 py-2.5 text-[12px] font-medium capitalize transition-all
    hover:bg-white hover:shadow-[0_2px_5px_0_rgba(0,0,0,0.25)] dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {name}
    </button>
  );
};
