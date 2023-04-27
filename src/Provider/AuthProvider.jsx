import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(firebaseApp);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authValue = {
    user,
    setUser,
    login,
    singUp,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
