"use client"

import { FilterContext } from "@/context/FilterContext"
import { useContext } from "react"

export const useFilterContext = () => {
    const context = useContext(FilterContext)

    if(!context) {
        throw new Error("El hook useFilterContext debe ser utilizado dentro de un FilterContextProvider")
    }

    return context
}