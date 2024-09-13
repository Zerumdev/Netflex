import { createContext, useContext, useState } from "react";

const initialValue = {
  signUp: () => {},
  logIn: () => {},
  currentUser: null,
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  const signUp = (newUser) => {
    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  const logIn = ({ id, password }) => {
    const user = users.find((user) => user.id === id);
    if (!user) return alert("존재하지 않는 ID입니다.");
    if (user.password !== password) return alert("잘못된 비밀번호입니다.");

    alert("로그인 되었습니다.");
    setCurrentUser(user);
  };

  const value = {
    signUp,
    logIn,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
