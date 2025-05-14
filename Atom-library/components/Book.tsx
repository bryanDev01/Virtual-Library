"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useBookContext } from "@/hooks/useBookContext";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Book() {
  const { addBook, selectedBooks } = useBookContext();
  const { filter } = useFilterContext();
  const scrollRef = useScrollAnimation();

  const handleAddClick = (title: string) => {
    const added = filter.bookList.find((lib) => lib.book.title === title);
    if (added) {
      addBook(added);
    }
  };

  return (
    <ul
      ref={scrollRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4"
    >
      {filter.bookList.map((lib) => (
        <li
          key={lib.book.title}
          className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group"
        >
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src={lib.book.cover}
              alt={lib.book.synopsis}
              fill
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-white line-clamp-2 hover:line-clamp-none transition-all duration-300">
                {lib.book.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {lib.book.author.name} • {lib.book.year}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleAddClick(lib.book.title)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors duration-200"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="text-sm font-medium">Add to List</span>
              </button>
              {selectedBooks.find((b) => b.book.title === lib.book.title) && (
                <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                  In List
                </span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Book;
