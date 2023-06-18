

import React,{useContext} from "react";
import {UserContext} from "../context/user";

//import Interests from "./Interests";

function Profile({theme}) {
  const user=useContext(UserContext);
  const setUser=useContext(UserContext);

  console.log("the user is: ",user);
  if(!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      {/*<Interests interests={user.interests} theme={theme} user={user} setUser={setUser} />*/}
    </div>
  );
}

export default Profile;
