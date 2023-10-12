import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState("");
  const [session, setSession] = useState(true);

  const API = `${process.env.REACT_APP_API}/api`;

  useEffect(() => {
    axios
      .get(`${API}/getMyInfo`, { withCredentials: true })
      .then((res) => {
        setProfile(res.data.admin.adminEmail);
      })
      .catch((err) => {
        console.log(`Not Logged In`);
        setSession(() => {
          return false;
        });
      });
  }, []);

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <ProfileContext.Provider value={{ profile, session, setSession }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  return useContext(ProfileContext);
}
