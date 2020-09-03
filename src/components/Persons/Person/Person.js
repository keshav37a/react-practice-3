import React, { Component } from "react";
import WithClass from "../../../hoc/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] componentWillUnmount");
  }

  componentDidMount(){
    // document.querySelector('input').focus();
    // this.inputElement.focus();
    this.inputElRef.current.focus();
  } 

  rnd = Math.random();

  render() {
    // if ( rnd > 0.7 ) {
    //     throw new Error( 'Something went wrong' );
    // }


    console.log("[Person.js] called");

    return (
      <WithClass classes="hcClass">
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            className="inputF"
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            ref={this.inputElRef}
            // ref={(inputEl)=>{this.inputElement = inputEl }}
          />
        </div>
      </WithClass>
    );
  }  
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.changed,
  name: PropTypes.string,
  age: PropTypes.string
}

export default Person;
