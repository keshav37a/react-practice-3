import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{
  constructor(props) {
    super(props);
  }

  static getDervivedStateFromProps(props, state){
    console.log('[Persons.js] getDervivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons)
      return true;
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {hey:'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(snapshot);
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillMount(){
    console.log('[Persons.js] componentWillUnmount');
  }


  render() {
    const persons = this.props.persons;
    const clicked = this.props.clicked;
    const changed = this.props.changed;

    console.log('[Persons.js] rendering...')

    return (
      <div className="personsContainer">
        {persons.map((person, index) => {
          return (
            <Person
              key={index}
              click={() => clicked(index)}
              name={person.name}
              age={person.age}
              changed={(event) => changed(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
