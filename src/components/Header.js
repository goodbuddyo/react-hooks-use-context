// import the useContext hook
import React,{useContext,useEffect} from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";
import {UserContext} from "../context/user";

function Header({theme,setTheme}) {
  const {user,setUser}=useContext(UserContext);

  function handleLogin() {
    if(user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }
  console.log("default user is: ",defaultUser)

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin} theme={theme}>
          {user? "Logout":"Login"}
        </ThemedButton>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}

export default Header;
