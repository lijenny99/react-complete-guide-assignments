import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    people: [
      {username: 'Jenny', city: 'Toronto'},
      {username: 'Marcus', city: 'Rome'},
      {username: 'Tom', city: 'Sacramento'}
    ]
  }

  usernameEventHandler = (newUsername) => {
    this.setState({
      people: [
        {username: newUsername.target.value, city: 'Toronto'},
        {username: 'Marcus', city: 'Rome'},
        {username: 'Tom', city: 'Sacramento'}
      ]
    })
  }

  render() {
    const style = {
      border: '2px solid green',
      padding: '10px',
      margin: '50px',
      float: 'left'
    }
    return (
      <div className="App">
        <ol>
          <li>✅ Create TWO new components: UserInput and UserOutput</li>
          <li>✅ UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>✅ Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>✅ Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>✅ Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>✅ Add a method to manipulate the state (=> an event-handler method)</li>
          <li>✅ Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>✅ Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>❗Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>✅ Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.usernameEventHandler} currentName={this.state.people[0].username}/> 
        <div style={style}>
          <UserOutput username={this.state.people[0].username} city={this.state.people[0].city}/>
          <UserOutput username={this.state.people[1].username} city={this.state.people[1].city}/>
          <UserOutput username={this.state.people[2].username} city={this.state.people[2].city}/>
        </div>
      </div>
    );
  }
}

export default App;
