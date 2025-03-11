import { createContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (roll_no, password) => {
    if (roll_no === "E29" && password === "Hasnain") {
      setUser({ roll_no, password });
    }
  };

  const logout = () => {
    setUser();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
