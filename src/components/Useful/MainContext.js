import { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [editId, setEditId] = useState("");
  const [videoId1, setVideoId1] = useState("")

  return (
    <MainContext.Provider value={{ editId, setEditId, videoId1, setVideoId1 }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}
