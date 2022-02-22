import LibraryContext from "../context/LibraryContext"
import {useContext} from "react"

function Header() {

  const {bookList} = useContext(LibraryContext)

  let read = 0;
  let unread = 0;

  for (let book of bookList){
    book.isRead ? read++ : unread++
  }

  let total = read + unread;

  return (
    <header>
        <h1>My Library</h1>
        <div className="log">
            <p>Read: <span className="read">{read}</span></p>
            <p>Unread: <span className="unread">{unread}</span></p>
            <p>Total: <span className="total">{total}</span></p>
        </div>
    </header>
  )
}

export default Header