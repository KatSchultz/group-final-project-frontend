import { User } from "firebase/auth";
import { createContext, useState } from 'react';

interface AuthContextModel {
    user: User | null;
    setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextModel>({
    user: null,
    setUser: () => {},
});

interface Props {
    children: React.ReactNode;
}

export function AuthContextProvider({children}: Props) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}