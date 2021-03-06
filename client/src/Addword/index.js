import { useState } from "react";
import { Addmin } from "./Addmin";
import { Login } from "./Login";

export const Addword = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Addmin />;
  }

  const login = (bool) => {
    setIsLoggedIn(bool)
  }

  return <Login login={login}/>;
};
