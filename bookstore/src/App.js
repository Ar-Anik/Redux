import "./App.css";
import AddBook from "./components/addBook";
import BookList from "./components/bookList";
import HeaderFilter from "./components/header_filter";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <HeaderFilter />

            <BookList />
          </div>
          <div>
            <AddBook />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
