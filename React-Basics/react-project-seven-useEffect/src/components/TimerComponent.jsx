import { useEffect, useState } from "react";

function TimerComponent(){
    const[seconds , setSeconds] = useState(0);
    

    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("setInterval Executed");
         setSeconds(prevSeconds => prevSeconds + 1);
      },1000);

      return () => {
        console.log("Time to stop");
        clearInterval(intervalId);
      };
    },[]);

    //it will run only on first render
    return(
        <div>
            <h1> Seconds : {seconds}</h1>
        </div>
    );
}

export default TimerComponent;