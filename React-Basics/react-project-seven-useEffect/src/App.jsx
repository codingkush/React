import { useEffect, useState } from "react";
import "./App.css";
import LoggerComponent from "./components/LoggerComponent";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponents from "./components/ResizeComponents";
import MultiEffectComponent from "./components/MultiEffectComponent";

function App() {

  //  const[count,setCount] = useState(0);
  //  const[ total , setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dep list

  // useEffect(() => {
  //   first;
  //   return () => {
  //     second;
  //   }
  // }, [third]);


  //variation : 1
  //runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })
  //its running two times bcz of strictmode , for devlopment mode 
  // it render two times 


  //variation : 2
  //that runs on only first render
  // useEffect(() =>{
  //    alert("I will run on only first render")
  // },[])

  //variation : 3
  //run after count updates but before render
  // useEffect(()=>{
  //  alert("I will run every time when count is updated");
  // },[count])

  //variation : 4
  //multiple dependencies
  // useEffect(() => {
  //   alert("I will run on every time when count/total is updated")
  // },[count, total])


  //variation : 5
  //lets add the cleanup function 
  // useEffect(() => {
  //   alert("Count is updated")
  //   return () => {
  //     alert("count is unmounted from UI")
  //   }
  // },[count])

  //  function handleClick(){
  //    setCount(count + 1);
  //   }

  //   function handleClickTotal(){
  //    setTotal(total + 1);
  //  }


  return (
    <div>
      {/* <button onClick={handleClick}>
      update Count
    </button>
    <br />
    count is : {count}

    <br/>
     <button onClick={handleClickTotal}>
      update Total
    </button>
    <br />
    Total is : {total} */}

    {/* <LoggerComponent/> */}
    {/* <TimerComponent/> */}
    {/* <DataFetcher/> */}
    {/* <ResizeComponents/> */}
    {/* <MultiEffectComponent/> */}
    </div>
  )
}

export default App;
