import { BookProvider } from "./context/bookContext";
import SearchHeader from "./components/SearchHeader";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <SearchHeader />
        <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
