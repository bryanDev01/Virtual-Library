import BookList from "@/components/BookList";
import "../styles/page.css";
import { Atom } from "lucide-react";
import Book from "@/components/Book";
import BookProvider  from "@/context/BookContext";
import Filters from "@/components/Filters";
import FilterProvider from "@/context/FilterContext";

export default function Home() {
  return (
    <section className=" relative p-2 font-normal w-full bg-gradient-to-br from-slate-950 to-slate-700">
      <div className=" flex flex-col justify-center items-center py-4">
        {" "}
        <h1 className=" flex justify-center items-center gap-1 text-3xl text-red-700">
          <Atom />A<b className=" text-white">TOM</b>
        </h1>
        <p className=" m-auto text-6xl text-balance tracking-tight text-white ">
          Welcome to my Online Library
        </p>
      </div>
      <BookProvider>
        <FilterProvider>
          <Filters />
          <Book />
        </FilterProvider>
        <div className=" p-3">
          <BookList />
        </div>
      </BookProvider>

      <main className=" w-full m-auto tracking-wide"></main>
    </section>
  );
}
