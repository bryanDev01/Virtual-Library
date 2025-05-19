import { useContext } from "react"
import { BookContext } from "@/context/BookContext"

export const useBookContext = () => {
    const context = useContext(BookContext)

    if (!context) {
        throw new Error("El hook useBookContext debe ser usado dentro de un BookProvider")
    }
    return context
}