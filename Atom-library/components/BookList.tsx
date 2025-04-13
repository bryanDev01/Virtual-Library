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
    <section>
      <div className=" absolute top-10 right-10 text-white">
        <div className=" flex justify-center items-center">
          <div className={isShowed ? " hidden" : ( selectedBooks.length ? " pulser flex items-center justify-center w-[25px] h-[25px] rounded-full bg-red-600 self-end text-center" : "flex items-center justify-center w-[25px] h-[25px] rounded-full bg-red-600 self-end text-center")}>{selectedBooks.length}</div>{" "}
          <div className=" flex flex-col justify-center items-center">
            <p>BookList</p>
            <button
              className=" flex justify-center items-center w-16 bg-white rounded-lg"
              onClick={handleShowClick}
            >
              <Library className=" text-black w-28 h-8 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isShowed
            ? " rounded-lg text-white w-[300px] h-fit absolute top-28 right-0 p-3 flex flex-col bg-slate-950"
            : " hidden "
        }
      >
        <h1 className=" text-white font-bold text-2xl text-center flex justify-center items-center gap-1"><AtomIcon className=" bg-red-500 w-4"/>Reading List<AtomIcon className=" bg-red-500 w-4"/></h1>
        <h2 className=" text-white font-semibold py-2">{ selectedBooks.length === 0 ? "Nothing to show yet ... Please take a book" : ""  }</h2>
        <ul className=" text-white flex flex-col gap-4">
          {selectedBooks.map((b) => (
           <div key={b.book.title} className=" flex gap-1 justify-center items-center">
            <li className=" text-white bg-slate-800 z-10 -mr-2 hover:mr-0 hover:transition-all hover:cursor-pointer">
              <p>{b.book.title}</p>
              <p>{b.book.author?.name}</p>
              <button
                className=" p-3 text-white"
                onClick={() => handleRemoveItem(b.book.title)}
              >
                <Eraser />
              </button>
            </li>
            <span className=" self-start w-7 h-7 rounded-full bg-red-800 flex justify-center items-center font-semibold  ">{b.count}</span>
           </div> 
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BookList;
