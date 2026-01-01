import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
    email: string;
}

interface AuthContextProps {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Persist user in localStorage for demo purposes
    useEffect(() => {
        const stored = localStorage.getItem('auth_user');
        if (stored) setUser(JSON.parse(stored));
    }, []);

    const signIn = async (email: string, password: string) => {
        // In a real app you would call an API. Here we just accept any credentials.
        const loggedUser = { email };
        setUser(loggedUser);
        localStorage.setItem('auth_user', JSON.stringify(loggedUser));
    };

    const signUp = async (email: string, password: string) => {
        // Simulate registration – same as signIn for demo.
        const newUser = { email };
        setUser(newUser);
        localStorage.setItem('auth_user', JSON.stringify(newUser));
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
