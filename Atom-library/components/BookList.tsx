"use client";

import { useBookContext } from "@/hooks/useBookContext";
import { AtomIcon, Eraser, Library } from "lucide-react";
import { useState } from "react";
import "@/styles/bookList.css"

function BookList() {
  const { selectedBooks, removeBook } = useBookContext();
  const [isShowed, setIsShowed] = useState<boolean>(false);

  const handleRemoveItem = (title: string) => {
    removeBook(title);
  };

  const handleShowClick = () => {
    setIsShowed(!isShowed);
  };

  return (
    <section className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={handleShowClick}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-all duration-200 group"
        >
          <Library className="w-5 h-5" />
          <span className="font-medium">Reading List</span>
          {selectedBooks.length > 0 && (
            <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold bg-indigo-500 text-white rounded-full">
              {selectedBooks.length}
            </span>
          )}
        </button>

        {isShowed && (
          <div className="absolute top-full right-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 overflow-hidden">
            <div className="p-4 border-b border-slate-700/50">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <AtomIcon className="w-5 h-5 text-indigo-400" />
                Reading List
              </h2>
            </div>

            {selectedBooks.length === 0 ? (
              <div className="p-4 text-center text-slate-400">
                <p>Your reading list is empty</p>
                <p className="text-sm mt-1">Add some books to get started!</p>
              </div>
            ) : (
              <ul className="divide-y divide-slate-700/50 max-h-[60vh] overflow-y-auto">
                {selectedBooks.map((b) => (
                  <li
                    key={b.book.title}
                    className="group p-3 hover:bg-slate-800/50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white truncate">{b.book.title}</h3>
                        <p className="text-sm text-slate-400 truncate">{b.book.author?.name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full">
                          {b.count}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(b.book.title)}
                          className="p-1.5 text-slate-400 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-colors duration-200"
                          title="Remove from list"
                        >
                          <Eraser className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default BookList;
