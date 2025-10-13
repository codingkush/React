import React from 'react'

const Card = (props) => {
  return (
    <div>
        {/* {props.name} */}
        <input type='text' onChange={(e) => props.setName(e.target.value)}/>
        <p>Value of name state var of {props.title} : {props.name}</p>
    </div>
  )
}

export default Card;