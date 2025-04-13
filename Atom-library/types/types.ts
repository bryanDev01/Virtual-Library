export interface Book {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
  };
  count: number;
}

export interface Author {
  name: string;
  otherBooks: string[];
}

export interface libContext {
  selectedBooks: Book[];
  addBook: (book: Book) => void;
  removeBook: (title: string) => void;
}

export interface filterContext {
  filter: BookFilters;
  filterData: (genre: string) => void; 
}

export interface BookFilters {
  availableBooks: number,
  bookList: Book[],
  availableGenreBooks: number | null,
  filteredBooks: Book[]
}