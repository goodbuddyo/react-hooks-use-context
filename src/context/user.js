

import React,{useState} from "react";
import initialUser from "../data";
import {__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED} from "react/cjs/react.development";

const UserContext=React.createContext(initialUser);

function UserProvider({children}) {
  const [user,setUser]=useState(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
  /*const currentUser={name: "Duane",interests:["Coding","Biking","Words ending in 'ing'"],};*/
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
    //<UserContext.Provider value={currentUser}>{children}
    //</UserContext.Provider>
  );
}

export {UserContext,UserProvider};