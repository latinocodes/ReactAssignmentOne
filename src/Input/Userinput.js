import React from 'react';
import './userinput.css';

const userinput = (props) => {
  return(
    <div className="input">
      <input type="text" placeholder="Please enter a User Name: " onChange={props.change} value={props.userName}/>
    </div>
  )
}

export default userinput;
