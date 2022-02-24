import ButtonAction from './ButtonAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryContext from '../context/LibraryContext';
import {useContext} from "react"

function BookCard({book }) {

  const {deleteBook, editBook} = useContext(LibraryContext)

  return (
    <div className='book-card'>
        <p><strong>Title:</strong> {book.title}</p>
        <hr/>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Pages:</strong> {book.pages || "-"}</p>
        <p><strong>State:</strong> {book.isRead ? "Read" : "Unread"}</p>
        <p><strong>Read Date:</strong> {book.readDate}</p>
        <div className='control'>
          <ButtonAction icon={<EditIcon />} text="Edit" onPress={() => editBook(book)}/>
          <ButtonAction icon={<DeleteIcon />} text="Delete" onPress={() => deleteBook(book.id)} />
        </div>
    </div>
  )
}

export default BookCard

