import { useBook } from "../../context/bookContext";
import BookCard from "../BookCard";
import styles from "./styles.module.css";

const BookList = () => {
  const { data, loading, error } = useBook();
  return (
    <div className={styles.bookListContainer}>
      {loading && <span className={styles.loader}></span>}
      {error && <div className={styles.errorMessage}>{error}</div>}
      {!loading && (
        <div className={styles.bookCards}>
          {data.map((book) => (
            <BookCard book={book} key={book.etag} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
