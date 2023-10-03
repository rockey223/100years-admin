import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {

    const [profile, setProfile] = useState({
        name: "",
        role: ""
    })

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfileContext() {
    return useContext(ProfileContext);
}
