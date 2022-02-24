import { createContext, useState, useEffect } from "react";
import bookCase from "../components/BookCase";

const LibraryContext = createContext()

export const BookListProvider = ({ children }) => {
    const [bookList, setBookList] = useState(() => {
        const saved = localStorage.getItem("bookList")
        const initialValue = JSON.parse(saved)
        return initialValue || bookCase;
    })
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState("")
    const [isRead, setIsRead] = useState(false)
    const [readDate, setReadDate] = useState(new Date().toLocaleDateString());

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        reset()
    }

    const { v4: uuidv4 } = require('uuid');
    const [bookEdit, setBookEdit] = useState({
        item: {},
        edit: false
    })

    const [selected, setSelected] = useState(false)
    useEffect(() => {
        setSelected(bookEdit ? bookEdit.item.isRead : false)
    }, [bookEdit])

    useEffect(() => {
        if (bookEdit.edit === true) {
            setTitle(bookEdit.item.title)
            setAuthor(bookEdit.item.author)
            setPages(bookEdit.item.pages)
            setIsRead(bookEdit.item.isRead)
            setReadDate(bookEdit.item.readDate)

            handleOpen()
        }
    }, [bookEdit])

    useEffect(() => {
        localStorage.setItem("bookList", JSON.stringify(bookList))
    }, [bookList])

    function handleChange(e) {
        if (e.target.id === "title") setTitle(e.target.value)
        else if (e.target.id === "author") setAuthor(e.target.value)
        else if (e.target.id === "pages") setPages(e.target.value)
        else if (e.target.type === "checkbox") setIsRead(!isRead)
    }

    function handleDateChange(date) {
        setReadDate(date)
    }

    function addBook() {
        if (title && author) {
            if (bookEdit.edit === true) {
                setBookList(bookList.map((item) => {

                    if (bookEdit.item.id == item.id) {
                        return {
                            id: uuidv4(),
                            title: title,
                            author: author,
                            pages: +pages,
                            isRead: isRead,
                            readDate: readDate
                        }
                    }
                    else return item
                }))
            } else {
                setBookList([...bookList, {
                    id: uuidv4(),
                    title: title,
                    author: author,
                    pages: +pages,
                    isRead: isRead,
                    readDate: readDate,
                }])
            }
            handleClose()
            reset()
            setBookEdit({ ...bookEdit, edit: false })
        }
    }
    function reset() {
        setTitle("")
        setAuthor("")
        setPages("")
        setIsRead(false)
        setReadDate(new Date().toLocaleDateString())
    }

    function deleteBook(id) {
        setBookList(bookList.filter(book => {
            return (book.id === id) ? null : book
        }))
    }

    function editBook(item) {
        setBookEdit({
            item,
            edit: true
        })
    }

    function handleSwitchClick() {
        setSelected(!selected)
    }

    return <LibraryContext.Provider value={{
        bookList,
        title,
        author,
        pages,
        isRead,
        readDate,
        open,
        bookEdit,
        selected,
        handleOpen,
        handleClose,
        handleChange,
        handleDateChange,
        addBook,
        deleteBook,
        editBook,
        handleSwitchClick
    }}>
        {children}
    </LibraryContext.Provider>
}

export default LibraryContext;

