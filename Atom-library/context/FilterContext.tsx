"use client"

import { createContext, useState } from "react";
import { BookFilters, filterContext } from "@/types/types";
import { library } from "@/app/mocks/books.json"


export const FilterContext = createContext<filterContext | null>( null ) 

export default function FilterProvider( { children }: { children: React.ReactNode } ) {
    const [filter, setFilter] = useState<BookFilters>({
        availableBooks: library.length,
        bookList: library,
        availableGenreBooks: null,
        filteredBooks: [],
    })

    const filterData = (genre: string) => {
        if(genre === "All") {
            setFilter((prevState) => ({...prevState, bookList: library, availableGenreBooks: library.length, availableBooks: library.length}))
            return
        }
        const filteredBooks = library.filter(lib => lib.book.genre === genre)
        setFilter(( prevState) => ({...prevState, bookList: filteredBooks, availableGenreBooks: filteredBooks.length, availableBooks: filteredBooks.length}))
    }

    return (
        <FilterContext.Provider value={{ filter, filterData }}>
            {children}
        </FilterContext.Provider>
    )
}

