import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
  const [count,setCount] = useState(0);
  const [seconds , setSeconds] = useState(0);

  useEffect(() => {
    console.log('Count changed:',count);
  },[count]);
 //side-effect logic will run only when count is changed

  useEffect(()=>{
    const intervalId = setInterval(() => {
        console.log("SetInterval executed");
        setSeconds(prevSeconds => prevSeconds + 1);
        // setSeconds(seconds+1);
        // Don’t use state + 1 inside async functions like setInterval or setTimeout 
        // because the function will “remember” the old value (stale closure).

        // Do use the functional form setState(prev => prev + 1) — 
        // it always gives you the latest state, so your updates are correct.
    }, 1000);

    return () =>{
        console.log("Time to Stop");
        clearInterval(intervalId);
    }
  }, []);
 //it will run only on first render

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>
            Increment Count
        </button>
        <h3>Seconds : {seconds}</h3>
    </div>
  )
}

export default MultiEffectComponent