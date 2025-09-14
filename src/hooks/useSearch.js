// src/hooks/useSearch.js
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext.jsx";

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}
