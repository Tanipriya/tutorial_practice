import React from 'react';
import './Person.css'

const person = (props) => {
return(
    <div className="Person">
        <h4 onClick={props.click}>My name is {props.name}, I am {props.age} years old.</h4>
        <h6>{props.children}</h6>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
) 
}

export default person;