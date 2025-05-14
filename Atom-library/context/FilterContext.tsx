"use client"

import { createContext, useState } from "react";
import { Book, BookFilters, filterContext } from "@/types/types";
import { library } from "@/app/mocks/books.json"

export const FilterContext = createContext<filterContext | null>(null);

export default function FilterProvider({ children }: { children: React.ReactNode }) {
    // Cast the imported library to Book[] to ensure type safety
    const typedLibrary = library as Book[];

    const [filter, setFilter] = useState<BookFilters>({
        availableBooks: typedLibrary.length,
        bookList: typedLibrary,
        availableGenreBooks: null,
        filteredBooks: [],
    });

    const filterData = (genre: string) => {
        if (genre === "All") {
            setFilter((prevState) => ({
                ...prevState,
                bookList: typedLibrary,
                availableGenreBooks: typedLibrary.length,
                availableBooks: typedLibrary.length
            }));
            return;
        }

        const filteredBooks = typedLibrary.filter(lib => lib.book.genre === genre);
        setFilter((prevState) => ({
            ...prevState,
            bookList: filteredBooks,
            availableGenreBooks: filteredBooks.length,
            availableBooks: filteredBooks.length
        }));
    };

    return (
        <FilterContext.Provider value={{ filter, filterData }}>
            {children}
        </FilterContext.Provider>
    );
}

