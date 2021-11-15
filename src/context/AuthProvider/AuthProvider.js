import React, { createContext } from 'react';
import useFirebae from '../../hooks/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const AllContext = useFirebae();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;