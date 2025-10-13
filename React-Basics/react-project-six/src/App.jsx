
import './App.css'

function App() {


  function handleClick(){
    alert('I am clicked..');
  }

  function handleMouseOver(){
    alert('mouse cursor on paragraph.')
  }

  function handleInputChange(e){
    console.log('Value Changes in Input.' ,e.target.value);
  }
 
  function handleSubmit(e){
    e.preventDefault();
    //writing my customer behaviour down
    alert("should i submit form? ")
  }
  return (

    <div>

        
     {// this is immediate invocation so we sont have to write like this we should use fat arrow function}
      // <button onClick={alert('clicked...')}> Click Me</button>
     }
      <button onClick={() => alert('clicked...')}> Click Me</button>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} style={{marginBottom: "10px"}}/>
        <button type='submit'>Click Me</button>
      </form> */}
     
    {/* <p onMouseOver={handleMouseOver} style={{"margin-bottom": "8px",color:"red"}}>
      I am paragraph.
     </p>

      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>

  )
}

export default App
