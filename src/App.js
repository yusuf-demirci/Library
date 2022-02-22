import Header from "./components/Header";
import BookList from "./components/BookList";
import TransitionsModal from "./components/BookInfo";
import { BookListProvider } from "./context/LibraryContext";

function App() {

  return (
    <BookListProvider>
      <Header />
      <main>
        <BookList />
        <TransitionsModal />
      </main>
    </BookListProvider>
  );
}

export default App;
