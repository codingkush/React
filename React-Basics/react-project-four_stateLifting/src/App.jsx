import { useState } from 'react'
import './App.css'
import Card from './components/Card'

//we are doin state lifting ( child to parent how data can be passed)
function App() {
  //create state
  //manage state
  //change state
  // then sync the state in all childrens

  const [name, setName] = useState('');

  return (
    <>
    <div>
       <Card title="Card1" name={name} setName={setName}/>
       {/* <p>Im inside parent and value of name is : {name}</p> */}
       <Card title="Card2" name={name} setName={setName}/>

    </div>
     {/* <Card name ="Kush Gupta"/> */}
    </>
  )
}

export default App
