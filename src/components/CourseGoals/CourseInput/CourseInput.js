import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(event.target.value.trim().length > 0);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsValid(true);
  };
  
 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${ !isValid ? "invalid" : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button  style = {{color:!isValid ? "lightcoral" : 'red'}}type="submit">Add Goal</Button>
  
    </form>
  );
};

export default CourseInput;