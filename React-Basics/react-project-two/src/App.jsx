import UserCard from "./components/UserCard";
import './App.css';

function App() {
  

  return (
    <div className="container">
     {/* <h1>Hi I am kush G</h1> */}
     <UserCard name ="Kush Gupta" desc="java" style = {{"border-radius" : "10px"}}/>
     <UserCard name="Jinwoo Sung" desc="gaming" style = {{"border-radius" : "10px"}}/>
     <UserCard name="Benjamin Tennison" desc="ios" style = {{"border-radius" : "10px"}}/>
    </div>
  )
}

export default App;
