import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Button from './components/Button';

function App() {
    const[count,setCount] = useState(0);

    function handleClick(){
      setCount(count+1);
    }
   
    // const [identity, setIdentity] = useState("who are you?");

    // Toggle function for button
    // function handleToggle() {
    //     setIdentity(prev => (prev === "who are you?" ? "im son of guko" : "who are you?"));
    // }

  return (
    <>
    <Button incrementCount = {handleClick} text ="click Me">
      <h1>{count}</h1>
    </Button>
    
     {/* <Button text="Check your identity" discloseIdentity = {handleToggle}>
      {identity}
     </Button> */}

      {/* <div>
         <Card name="kush gupta">
           <h1>Evolving Developer and BusinessMan</h1>
           <p>Trying to compete with himself</p>
           <p>Will Eligible to pass soon</p>
         </Card>

         <Card>
           <h2>Hello sen, start krte hai</h2>
         </Card>

         <Card children = "I'm children.."></Card>
      </div> */}
    </>
  )
}

export default App
