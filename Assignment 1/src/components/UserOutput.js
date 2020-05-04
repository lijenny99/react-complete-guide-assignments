import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
        <p>My username is {props.username},</p>
        <p>and I live in {props.city}.</p>
    </div>
  )
}

export default UserOutput;