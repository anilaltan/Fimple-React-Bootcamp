import { createContext, useContext, useState } from "react";
import useFetch from "../useFetch";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetch(searchTerm);

  const values = { searchTerm, setSearchTerm, data, loading, error };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export const useBook = () => useContext(BookContext);
