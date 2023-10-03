"use client";
import React, { useState } from "react";

const genres = [
  { id: 1, name: "Поп-музыка" },
  { id: 2, name: "Разговорное радио" },
  { id: 3, name: "Рок-музыка" },
  { id: 4, name: "Электронная музыка" },
  { id: 5, name: "Танцевальная музыка" },
  { id: 6, name: "Лёгкая музыка" },
  { id: 7, name: "Ретро музыка" },
  { id: 8, name: "Музыка для души" },
  { id: 9, name: "Шансон" },
  { id: 10, name: "Классическая музыка" },
  { id: 11, name: "Рэп и Хип-Хоп" },
  { id: 12, name: "Русская музыка" },
  { id: 13, name: "Джаз/Блюз" },
  { id: 14, name: "Романтика" },
  { id: 15, name: "Юмор" },
  { id: 16, name: "Фолк/Этно" },
  { id: 17, name: "Детская музыка" },
  { id: 18, name: "Альтернативная музыка/инди" },
];

const StationFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item),
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const dropdownContent = isOpen && (
    <div
      className={
        "dark:bg-gray-800 dark:text-white bg-white text-gray-800 absolute mt-4 py-2 w-48 border border-gray-300 rounded-lg shadow-lg z-10"
      }
    >
      <div className="px-4 py-2">
        <label className="block text-sm font-medium">Filter Options</label>
      </div>
      <div className="px-4 py-2 space-y-1">
        {genres.map(({ id, name }) => {
          return (
            <label key={id} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                value="Option 1"
                checked={selectedItems.includes("Option 1")}
                onChange={() => handleCheckboxChange("Option 1")}
              />
              <span className="ml-2">{name}</span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`dark:bg-gray-800 dark:text-white bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md focus:outline-none`}
        onClick={toggleDropdown}
      >
        Filter
      </button>
      {dropdownContent}
    </div>
  );
};

export default StationFilter;
