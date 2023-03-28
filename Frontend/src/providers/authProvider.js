import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState("");

  // Perform login process for the user & save authID, etc
  const login = function(email) {
    setAuth(true);
    const id = "1234-1234-1234";  // Some random userId
    setUser({ email, id});
  };

  const signUp = function(email, name) {
    setUserInfo({email, name});
  }

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout, userInfo, signUp };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};