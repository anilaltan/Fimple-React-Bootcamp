import { useBook } from "../../context/bookContext";
import styles from "./styles.module.css";

const SearchHeader = () => {
  const { setSearchTerm } = useBook();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTermInput = e.target.SearchBook.value;
    setSearchTerm(searchTermInput);
  };

  return (
    <div className={styles.codropsHeader}>
      <h1>Search Books</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            name="SearchBook"
            id="SearchBook"
            placeholder="Search for books"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchHeader;
