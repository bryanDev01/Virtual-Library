"use client"

import { Book, libContext } from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext<libContext | null>(null);

export default function BookProvider({ children }: { children: React.ReactNode }) {
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);

  // Initialize from localStorage on client-side only
  useEffect(() => {
    const savedBooks = localStorage.getItem("selectedBooks");
    if (savedBooks) {
      setSelectedBooks(JSON.parse(savedBooks));
    }
  }, []);

  const addBook = (book: Book) => {
    setSelectedBooks((prevState) => {
      let newBooks;
      if (prevState.find(b => b.book.title === book.book.title)) {
        newBooks = prevState.map(b => 
          b.book.title === book.book.title ? {...b, count: b.count + 1} : b
        );
      } else {
        const newBook = { ...book, count: 1 };
        newBooks = [...prevState, newBook];
      }
      localStorage.setItem("selectedBooks", JSON.stringify(newBooks));
      return newBooks;
    });
  };

  const removeBook = (title: string) => {
    setSelectedBooks((prevState) => {
      const newBooks = prevState.filter((book) => book.book.title !== title);
      localStorage.setItem("selectedBooks", JSON.stringify(newBooks));
      return newBooks;
    });
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "selectedBooks") {
        const updatedBooks = JSON.parse(e.newValue || "[]");
        setSelectedBooks(updatedBooks);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  return (
    <BookContext.Provider value={{ selectedBooks, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}


