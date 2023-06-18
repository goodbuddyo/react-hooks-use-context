

import React,{useState,useEffect} from "react";
import Header from "./Header";
import Profile from "./Profile";
import {UserProvider} from "../context/user";

function App() {
  const [theme,setTheme]=useState("dark");
  const [user,setUser]=useState(null);
  useEffect(() => {
    fetch("../data")
      .then(r => r.json())
      .then(data => setUser(data))
      .then(data => console.log("the data is: ",data))
  },[])
  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
        <Profile theme={theme} user={user} setUser={setUser} />
      </UserProvider>
      {/*  we're getting user from Context
           remove user={user} setUser={setUser}
           const [user,setUser]=useState(null);  */}
    </main>
  );
}

export default App;
