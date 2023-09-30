import React from 'react';
import {FilterItem} from "@/app/components/common/station-filter/filter-item/FilterItem";

const genres = [
    { id: 1, name: "Поп-музыка"},
    { id: 2, name: "Разговорное радио"},
    { id: 3, name: "Рок-музыка"},
    { id: 4, name: "Электронная музыка"},
    { id: 5, name: "Танцевальная музыка"},
    { id: 6, name: "Лёгкая музыка"},
    { id: 7, name: "Ретро музыка"},
    { id: 8, name: "Музыка для души"},
    { id: 9, name: "Шансон"},
    { id: 10, name: "Классическая музыка"},
    { id: 11, name: "Рэп и Хип-Хоп"},
    { id: 12, name: "Русская музыка"},
    { id: 13, name: "Джаз/Блюз"},
    { id: 14, name: "Романтика"},
    { id: 15, name: "Юмор"},
    { id: 16, name: "Фолк/Этно"},
    { id: 17, name: "Детская музыка"},
    { id: 18, name: "Альтернативная музыка/инди"},
]


const StationFilter = () => {
    return (
        <div className="mb-10 mt-5 flex flex-wrap justify-start fixed">
            {genres.map(({ id, name }) => <FilterItem key={id} name={name}/> )}
        </div>
    );
};

export default StationFilter;