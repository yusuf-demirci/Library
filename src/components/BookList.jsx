import LibraryContext from "../context/LibraryContext"
import { useContext } from "react"
import BookCard from "./BookCard";

function BookList() {

    const {bookList} = useContext(LibraryContext)
    const { v4: uuidv4 } = require('uuid');

    return (
        <>
            {bookList.map((item, index) => {
                return <BookCard key={uuidv4()} id={index} book={item} />
            })}
        </>
    )
}

export default BookList