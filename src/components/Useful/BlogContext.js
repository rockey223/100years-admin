import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [editId, setEditId] = useState("");

  return (
    <BlogContext.Provider value={{ editId, setEditId }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  return useContext(BlogContext);
}
