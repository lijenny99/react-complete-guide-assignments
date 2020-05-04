import React from 'react';

const ValidationComponent = (props) => {
    const minLength = 5;

  return (
    <div>
        {
            (props.textLength < minLength) ?  "Text too short" : "Text long enough"
        }
    </div>
  )
}

export default ValidationComponent;