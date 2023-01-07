import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext();
function UserContext({ children }) {
    const [loggedUSer, setLoggedUSer] = useState({})
useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('repliq-current-user'))
    setLoggedUSer(currentUser)
}, [])

    const userinfo = { loggedUSer, setLoggedUSer };
    
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;