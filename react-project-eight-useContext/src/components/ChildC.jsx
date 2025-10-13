import React, { useContext } from 'react'
import {UserContext} from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
  const user = useContext(UserContext);
  const {theme,setTheme}  = useContext(ThemeContext);

  function toogleTheme(){
     if(theme === 'light'){
        setTheme('dark')
     }
     else{
        setTheme('light')
     }
  }
  return (
    <div>
        Hello {user.name}
        <br />
        <button onClick={toogleTheme}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildC