import React from 'react';

const UserInput = (props) => {
  return (
    <div> 
        <input type="text" onChange={props.changed} value={props.currentName}/>
    </div>
  )
}

export default UserInput;

// don't need to wrap in a div