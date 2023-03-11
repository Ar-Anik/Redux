import Header from "./components/header";
import TodoList from "./components/todoList";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />

        <hr class="mt-4" />

        <TodoList />

        <hr class="mt-4" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
