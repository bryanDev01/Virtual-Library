import BookList from "@/components/BookList";
import "../styles/page.css";
import { Atom } from "lucide-react";
import Book from "@/components/Book";
import BookProvider  from "@/context/BookContext";
import Filters from "@/components/Filters";
import FilterProvider from "@/context/FilterContext";

export default function Home() {
  return (
    <section className="min-h-screen p-3 sm:p-4 md:p-6 font-normal w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 space-y-4 sm:space-y-6">
          <h1 className="flex justify-center items-center gap-2 text-4xl font-bold group">
            <Atom className="text-indigo-500 h-8 w-8 animate-spin-slow" />
            <span className="text-indigo-500 animate-fade-in-left">A</span>
            <b className="text-white group-hover:text-indigo-400 transition-colors duration-300">TOM</b>
          </h1>
          <div className="space-y-4 text-center">
            <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-balance tracking-tight text-white max-w-4xl animate-fade-in-up">
              Discover Your Next Adventure
            </p>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-200">
              Explore our carefully curated collection of books, from timeless classics to contemporary masterpieces.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <BookProvider>
          <FilterProvider>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 mb-8 shadow-lg animate-fade-in-up animation-delay-400 w-full overflow-x-hidden">
              <Filters />
              <Book />
            </div>
          </FilterProvider>
          <div className="rounded-xl overflow-hidden">
            <BookList />
          </div>
        </BookProvider>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400">
            <div className="flex items-center gap-2">
              <Atom className="text-indigo-500 h-5 w-5" />
              <span className="text-sm">ATOM Library © {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">About</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Contact</a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
