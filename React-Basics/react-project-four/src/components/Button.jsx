import React from 'react'

const Button = (props) => {
  return (

    <div>

        <h1>{props.children}</h1>
        <button onClick={props.incrementCount}>
         {props.text}
        </button>
    </div>
    
    // <div>

    //   <h1>{props.children}</h1>
    //   <button onClick={props.discloseIdentity}>{props.text}</button>
    // </div>
  )
}

export default Button