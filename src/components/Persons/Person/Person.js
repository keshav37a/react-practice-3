import React, { Component } from "react";
import WithClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("[Person.js] componentWillUnmount");
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
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </WithClass>
    );
  }
}

export default Person;
