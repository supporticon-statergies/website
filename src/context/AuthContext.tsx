import React, { createContext, useContext, useState, useEffect } from "react";
import { sendLoginNotification } from "@/services/emailService";
import { toast } from "sonner";

export interface User {
  name: string;
  email: string;
  company?: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAuthModalOpen: boolean;
  authModalMode: "signup" | "login";
  openAuthModal: (mode?: "signup" | "login") => void;
  closeAuthModal: () => void;
  signup: (name: string, email: string, password?: string, company?: string) => Promise<boolean>;
  login: (email: string, password?: string, name?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "helpdude_user_session";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"signup" | "login">("signup");

  // Restore user session on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Error restoring user session:", e);
    }
  }, []);

  const openAuthModal = (mode: "signup" | "login" = "signup") => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const signup = async (name: string, email: string, password?: string, company?: string): Promise<boolean> => {
    const newUser: User = { name, email, company };
    setUser(newUser);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUser));

    // Send Notification Email with user Name and Email
    await sendLoginNotification({
      name,
      email,
      company,
      actionType: "SIGNUP",
    });

    closeAuthModal();
    return true;
  };

  const login = async (email: string, password?: string, name?: string): Promise<boolean> => {
    // Extract a default name from email if not provided (e.g. john.doe@email.com -> John Doe)
    const derivedName = name || email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const loggedInUser: User = { name: derivedName, email };

    setUser(loggedInUser);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loggedInUser));

    // Send Notification Email with user Name and Email
    await sendLoginNotification({
      name: derivedName,
      email,
      actionType: "LOGIN",
    });

    closeAuthModal();
    return true;
  };

  const logout = () => {
    const userName = user?.name || "User";
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    toast.info(`${userName} logged out`);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
