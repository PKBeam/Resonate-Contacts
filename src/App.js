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
      users: null,
      isMobileDevice: window.innerWidth < 1000
    };
  }

  componentDidMount() {

    // get user data
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
      this.setState({
        users: json
      })
    })

    // dynamically render on resize
    window.addEventListener('resize', () => {
      this.setState({
        isMobileDevice: window.innerWidth < 1000
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <MainNavbar />
        <div className="App-header">
          <ContactList users={this.state.users} isMobileDevice={this.state.isMobileDevice}/>
        </div>
      </div>
    );
  }
}

export default App;
