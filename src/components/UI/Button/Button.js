import React from 'react';
import './Button.css';

const Button = props => {

  return (
    <div>
      <button type={props.type} className="button"

       style={{color:props.style.color}} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;