import React from "react";

function Interests({interests,theme}) {
  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {interests.map((interest) => {
          return (
            <li key={interest}>{interest}</li>
          )
        })
        }
      </ul>
    </div>
  );
}

export default Interests;
