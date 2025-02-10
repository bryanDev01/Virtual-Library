"use client"

import { Book, libContext } from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext<libContext | null>(null);

export default function BookProvider({ children }: { children: React.ReactNode }) {
  const initialBooks = JSON.parse(localStorage.getItem("selectedBooks") || "[]")

  const [selectedBooks, setSelectedBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Book) => {
    setSelectedBooks((prevState) => {
      const newBooks = [...prevState, book]
      localStorage.setItem("selectedBooks", JSON.stringify(newBooks))
      return newBooks
    });
  };

  const removeBook = (title: string) => {
    setSelectedBooks((prevState) => {
      const newBooks =  prevState.filter((book) => book.book.title !== title)
      localStorage.setItem("selectedBooks", JSON.stringify(newBooks))
      return newBooks
    });
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if( e.key === "selectedBooks" ) {
        const updatedBooks = JSON.parse(e.newValue || "[]")
        setSelectedBooks(updatedBooks)
      }
    }

    window.addEventListener("storage", handleStorageChange)
  
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])
  
  return (
    <BookContext.Provider value={{ selectedBooks, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}


