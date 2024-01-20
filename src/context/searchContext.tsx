/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchText: string;
  setSearch: (text: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchText, setSearchText] = useState("");

  const setSearch = (text: string) => {
    setSearchText(text);
  };

  const data = {
    searchText,
    setSearch,
  };

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("error al iniciar el search context");
  }
  return context;
};
