import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
//importing radium to do sudo css styling which is not possible with js
import Radium from 'radium';

// function App() {
//   return (
//     <div className="App">
//       <Person name="Amit More" age="32">My Hobbies are: Cooking, Learning New Technologies...</Person>
//       <Person name="Preeti Shinde" age="30"/>
//       <Person name="Naivedya More" age="4">My Hobbies are: Watching TV, Playing with toys...</Person>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons : [
      {id: 1,name: 'Amit', age: 32},
      {id: 2,name: 'Preeti', age: 30},
      {id: 3,name: 'Naivedya', age: 4}
    ],
    showPerson: false
  }
  
  showFullNameHandler = () =>{
    //console.log('Swich name clicked');
   // This will not work this.state.persons[0].name = 'Amit More';
   this.setState(
    {persons : [
    {id: 1,name: 'Amit More', age: 32},
    {id: 2,name: 'Preeti Shinde', age: 30},
    {id: 3,name: 'Naivedya More', age: 4}
    ]}
  )
  }

  // showShortNameHandler = (shortName) =>{
  //   this.setState(
  //     {persons : [
  //     {name: shortName, age: 32},
  //     {name: 'Preeti Shinde', age: 30},
  //     {name: 'Naivedya More', age: 4}
  //     ]}
  //   )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex] 
    };

    person.name = event.target.value;
    const perosns = [...this.state.persons];
    perosns[personIndex] = person;

    this.setState({persons: perosns});

    // this.setState(
    //   {persons : [
    //   {id: 1,name: 'Amit More', age: 32},
    //   {id: 2,name: event.target.value, age: 30},
    //   {id: 3,name: 'Naivedya More', age: 4}
    //   ]}
    // )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
     //here we are copying original array and modifying which is not the best practice instaed we can copy
    //the original array and than manipulate

    // const persons = this.state.persons.slice() 
    //or using spread operator

    const persons =[...this.state.persons]
    persons.splice(personIndex,1); 
    this.setState({persons: persons})
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }
  render (){   
   const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid #ccc',
      cursor: 'pointer',
      fontWeight: 'bold',
      padding: '8px',
      marginTop: '10px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red-text');
    }
    if(this.state.persons.length<=1){
      classes.push('italic-text');
    }
    let persons = null
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            name={person.name}
            age={person.age}
            key={person.id}
            click={this.deletePersonHandler.bind(this,index)} 
            changed={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
        click={this.showShortNameHandler.bind(this, 'Amit')} >
          My Hobbies are: Cooking, Learning New Technologies...
        </Person>
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} 
         changed={this.nameChangedHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies are: Watching TV, Playing with toys...</Person>
       */}
        <button
        onClick={this.showFullNameHandler}>Show Full Name</button> 
        </div>
      );

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    return (
      
        <div className="App">
          <h2 className={classes.join(' ')}>Welcome to React App</h2>
           <button style={btnStyle}
          onClick={this.toggleHandler}>Toggle Name</button>

          {persons}

          {/* { this.state.showPerson ?
          <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
          click={this.showShortNameHandler.bind(this, 'Amit')} >
            My Hobbies are: Cooking, Learning New Technologies...
          </Person>
          <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} 
           changed={this.nameChangedHandler}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies are: Watching TV, Playing with toys...</Person>
          <button style={btnStyle}
          onClick={this.showFullNameHandler}>Show Full Name</button>
          </div> : null
         } */}
         
        </div>
      );
  }
}

//export default App;

//Wraping class to radium
export default Radium(App);