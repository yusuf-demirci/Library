import LibraryContext from "../context/LibraryContext"
import { useContext } from "react"
import BookCard from "./BookCard";

function BookList() {

    const {bookList} = useContext(LibraryContext)

    return (
        <>
            {bookList.map((item, index) => {
                return <BookCard key={index} book={item} />
            })}
        </>
    )
}

export default BookList