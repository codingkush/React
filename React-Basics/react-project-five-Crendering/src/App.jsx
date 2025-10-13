import { useState } from "react"
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

function App() {
  
  // Conditinal Rendering

  const[isloggedIn , setLoggedIn] = useState(false);

  //4 early return 
  if(!isloggedIn){
    return(
      <LoginBtn/>
    )
  }
 
  //3- Using (Logical) && operator
  return(
    <div>
      <h1>Welcome to Kush Industries Ltd. How can i help You?</h1>
      <div>{isloggedIn && <LogoutBtn />}</div>
    </div>
  )

  //2- Using Ternary Operator
  // return(
  //    <div>
  //     {isloggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //    </div>
  // )

  //1- Using if else 

  // if(loggedIn){
  //   return(
  //   <LoginBtn/>
  //  )
  // }
  // else{
  //   return (
  //   <LogoutBtn/>
  // )
  // }
}

export default App
