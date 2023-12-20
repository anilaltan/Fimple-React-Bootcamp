import React, { useState } from "react";
import styles from "./styles.module.css";

const BookCard = (props) => {
  const { book } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalStatus = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.bookCard}>
        <div className={styles.imageContainer}>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/150"
            }
            alt={book.volumeInfo.title}
          />
        </div>
        <div className={styles.detailsContainer}>
          <button onClick={handleModalStatus} className={styles.button}>
            Details
          </button>
        </div>
        <div className={styles.bookInfo}>
          <span className={styles.title}>{book.volumeInfo.title}</span>
          <span className={styles.authors}>{book.volumeInfo.authors}</span>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleModalStatus}>
              &times;
            </span>
            <div className={styles.details}>
              <h1>Book Details</h1>
              <ul>
                <li>
                  <h3>Book Description</h3>
                  <span>{book.volumeInfo.description}</span>
                </li>
                <li>
                  <h3>Published Date</h3>
                  <span>{book.volumeInfo.publishedDate}</span>
                </li>
                <li>
                  <h3>Publisher</h3>
                  <span>{book.volumeInfo.publisher}</span>
                </li>
                <li>
                  <h3>Pages</h3>
                  <span>{book.volumeInfo.pageCount} pages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCard;
