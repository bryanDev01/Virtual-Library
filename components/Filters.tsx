"use client"

import { useFilterContext } from "@/hooks/useFilterContext";

function Filters() {
    const { filter, filterData } = useFilterContext()

    const handleChange = (genre: string) => {
        filterData(genre)
    }
 
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 font-semibold w-full">
      <div className="text-white text-center sm:text-left">
        <label className="font-semibold text-sm sm:text-base">Available books: </label>
        <b>{filter.availableBooks}</b>
      </div>
      <div className="flex justify-center items-center gap-2">
        <label className="text-white font-semibold text-sm sm:text-base">Genre: </label>
        <select
          name="BookFilter"
          className="outline-none rounded-lg bg-slate-700 text-white text-center px-3 py-1.5 min-w-[120px]"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option defaultValue="All">All</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Fiction Science</option>
          <option value="Terror">Terror</option>
          <option value="Zombies">Zombies</option>
        </select>
      </div>
      <div className="text-white text-center sm:text-left text-sm sm:text-base">
        <label>Available books of selected genre: </label>
        <b>{filter.availableGenreBooks === null ? "All" : filter.availableGenreBooks}</b>
      </div>
    </div>
  );
}

export default Filters;
