import React from 'react'
import Kg from "../assets/Kg.png";
import './UserCard.css';

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id = 'user-img' src={Kg} alt="Kush" ></img>
        <p id='user-desc'>My work is making {props.desc} app</p>
    </div>
  )
}

export default UserCard