import logo from './logo.svg';
import './App.css';
import MainNavbar from './MainNavbar.js';
import ContactList from './ContactList.js';
import ContactDetails from './ContactDetails.js';
import React, {Component} from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
      this.setState({
        users: json
      },
      () => {
        console.log("Fetched users; set state")
      })
    })

  }

  render() {
    console.log(window.screen.availWidth)
    return (
      <div className="App">
        <MainNavbar />
        <div className="App-header">
          <ContactList users={this.state.users} isMobileDevice={window.screen.availWidth < 1000}/>
        </div>
      </div>
    );
  }
}

export default App;
