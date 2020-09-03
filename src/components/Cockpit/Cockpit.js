import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {

  const btnRef = useRef(null);

    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      btnRef.current.click();
      // setTimeout(()=>{
      //   alert('ohhh');
      // }, 1000);

      return()=>{
        console.log('[Cockpit.js] cleanup in useEffect');
      }
    },[]);

    const personsLength = props.personsLength;
    const showPersons = props.showPersons;
    const togglePersonsHandler = props.clicked;
    let btnClass = '';

    console.log('[Cockpit.js] called');

    const assignedClasses = [];
    if (personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    if(showPersons)
        btnClass = classes.Red;


  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={btnRef} className={btnClass} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
