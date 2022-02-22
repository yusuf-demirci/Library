import { createContext, useState } from "react";
import bookCase from "../components/BookCase";

const LibraryContext = createContext()

export const BookListProvider = ({ children }) => {
    const [bookList, setBookList] = useState(bookCase)

    return <LibraryContext.Provider value={{
        bookList,
    }}>
        {children}
    </LibraryContext.Provider>
}

export default LibraryContext;

