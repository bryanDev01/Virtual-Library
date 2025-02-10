"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useBookContext } from "@/hooks/useBookContext";
import { useFilterContext } from "@/hooks/useFilterContext";

function Book() {
  const { addBook, selectedBooks } = useBookContext();
  const { filter } = useFilterContext()

  const handleAddClick = (title: string) => {
    const added = filter.bookList.find((lib) => lib.book.title === title);
    if (added) {
      addBook(added);
    }
  };

  return (
    <ul className=" grid-container py-4 font-normal text-xl m-auto gap-7">
      {filter.bookList.map((lib) => (
        <li
          key={lib.book.title}
          className=" text-white cursor-pointer w-full flex flex-col gap-3 items-center bg-slate-800/10 ring-1 ring-slate-700 hover:ring-slate-500 hover:shadow-lg hover:shadow-slate-900"
        >
          <div className=" w-[250px]">
            <Image
              src={lib.book.cover}
              alt={lib.book.synopsis}
              width={300}
              height={50}
              className=" mx-auto py-2"
            />
          </div>
          <div className=" w-full h-1/2 flex flex-col justify-center items-center pb-3">
            <div className=" w-[300px] flex flex-col justify-center items-center gap-2 pb-3">
              <p className=" tracking-tighter text-balance text-center">
                <b>{lib.book.title}</b>
              </p>
              <p>
                {lib.book.author.name} - <span>{lib.book.year}</span>
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center tracking-tight gap-3">
              <button
                className=" bg-slate-950 text-white font-semibold rounded-lg p-3"
                onClick={() => handleAddClick(lib.book.title)}
              >
                <ShoppingBag />
              </button>
              <b className=" text-xl text-white font-thin">
                {selectedBooks.find((b) => b.book.title === lib.book.title)
                  ? "On reading list "
                  : ""}
              </b>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Book;
