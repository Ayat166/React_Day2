import React from "react";

function ButtonInput(props) {
    
  return (
    <div>
      <button onClick={() => props.setCounterValue(props.sign)} className="btn btn-primary"> {props.sign} </button>
    </div>
  )
}
export default ButtonInput;