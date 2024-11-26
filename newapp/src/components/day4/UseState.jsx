import { useEffect, useState } from "react";

function UseStateTwo() {
    const [IsUserLoggedIn, setIsUserLoggedIn] =useState(true);
    //if any state changes thn component will rerender
    console.log(IsUserLoggedIn, "USER LOGGED IN")
    function toggelLoginfalse(){
     setIsUserLoggedIn(false);
    }
    function toggelLogintrue(){
        setIsUserLoggedIn(true);
       }
       function toggelLogin(){
        setIsUserLoggedIn(!IsUserLoggedIn)
       }

       useEffect(() => {
        alert("hi user");
       });
    return(
        <div>
            {/* <h1>UseStateTwo</h1> */}
            {IsUserLoggedIn ? (<div>
                <h1>USER IS SUCCESFULLY LOGGED IN</h1>
                <button onClick={toggelLogin}>Logout</button>
                 </div>)
             : (<div>
                <h1>USER PLEASE LOGGED IN  </h1>
                <button onClick={toggelLogin}>Log Out</button>
                 </div>)}
        </div>
    );
}

export default UseStateTwo;