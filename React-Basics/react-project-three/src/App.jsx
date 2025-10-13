import { useState } from 'react'
import './App.css'

function App() {

  //react useState
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <h1> Counter App</h1>
         <p className='para'>you have clicked : <span className="counts">{count}</span></p>
         <button className='btn' onClick={() => {setCount(count+1)}}>Click Me</button>
      </div> 
    </>
  )
}

export default App
