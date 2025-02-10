"use client"

import { useFilterContext } from "@/hooks/useFilterContext";

function Filters() {
    const { filter, filterData } = useFilterContext()

    const handleChange = (genre: string) => {
        filterData(genre)
    }
 
  return (
    <div className=" flex items-center justify-center flex-1 gap-10 font-semibold ">
      <div className="  text-white ">
        <label className="font-semibold">Available books: </label>
        <b>{filter.availableBooks}</b>
      </div>
      <div className=" flex justify-center items-center gap-1">
        <label className=" text-white font-semibold">Genre: </label>
        <select
          name="BookFilter"
          className=" outline-none rounded-lg bg-slate-700 text-white text-center p-1"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option defaultValue="All">All</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Fiction Science</option>
          <option value="Terror">Terror</option>
          <option value="Zombies">Zombies</option>
        </select>
      </div>
      <div className=" text-white">
        <label>Available books of selected genre: </label>
        <b>{filter.availableGenreBooks === null ? "All" : filter.availableGenreBooks}</b>
      </div>
    </div>
  );
}

export default Filters;
