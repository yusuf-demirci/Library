
import ButtonAction from './ButtonAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function BookCard({ book }) {
  return (
    <div className='book-card'>
        <p><strong>Title:</strong> {book.title}</p>
        <hr/>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
        <p><strong>State:</strong> {book.isRead ? "Read" : "Unread"}</p>
        <p><strong>Read Date:</strong> {book.dateOfFinish}</p>
        <div className='control'>
          <ButtonAction icon={<EditIcon />} text="Edit"/>
          <ButtonAction icon={<DeleteIcon />} text="Delete"/>
        </div>
    </div>
  )
}

export default BookCard

