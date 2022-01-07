import { InputGroup, Card, ListGroup, Form} from 'react-bootstrap';
import './ContactList.css';
import AvatarText from './AvatarText.js';
import ContactDetails from './ContactDetails.js';
import React, {Component} from 'react';

class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: props.users,
      isMobileDevice: props.isMobileDevice,
      selectedId: 1,
      searchTerm: ""
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      users: props.users,
      isMobileDevice: props.isMobileDevice,
      selectedId: state.selectedId,
      searchTerm: state.searchTerm
    }
  }

  contactClicked(id) {
    this.setState({ selectedId: id })
  }

  searchForContact(query) {
    this.setState({ searchTerm: query })
  }

  render() {

    var users = this.state.users

    if (users == null) {
      return null
    }

    // apply search term
    if (this.state.searchTerm != "") {
      users = users.filter((u) => {
        const name = u.name.toUpperCase()
        const searchTerm = this.state.searchTerm.toUpperCase()
        return name.search(searchTerm) != -1
      })
    }
  
    // sort users by last name
    const sortedUsers = users.sort((u1, u2) => {
      const u1Lastname = u1.name.split(" ").pop()
      const u2Lastname = u2.name.split(" ").pop()
      if (u1Lastname > u2Lastname) {
        return 1
      } else if (u1Lastname < u2Lastname) {
        return -1
      } else {
        return 0
      }
    })

    // generate list of contacts to display
    const listItems = users.map((user) =>
      <ListGroup.Item key={"listItem"+user.id} className="list-item" action onClick={() => this.contactClicked(user.id)}>
        <div className="flex align-center">
          <AvatarText name={user.name} width="40"/>
          <div className="left-margin">
            {/* If rendering to a small screen, omit full name to save space*/}
            {this.state.isMobileDevice ? "" : user.name}
          </div>
        </div>
      </ListGroup.Item>
    )

    // get the user id that was selected, to show detailed info
    const selectedUser = users.find((u) => {
      return u.id == this.state.selectedId}
    )

    const contactListWidth = this.state.isMobileDevice ? "75px" : "270px";

    const searchBar = (
      <Card className="square-corner p-2 search-bar-card">
         <InputGroup className="search-bar">
          <InputGroup.Text className="search-bar-icon">🔍</InputGroup.Text>
          <Form.Control size="sm" placeholder="Search name" onChange={(input) => {this.searchForContact(input.target.value)}}/>
        </InputGroup>
      </Card>
    )
    return (
      <div className="flex">
        <div className="contact-list" style={{minWidth: contactListWidth, maxWidth: contactListWidth}}>
          {this.state.isMobileDevice ? "" : searchBar}
          <Card className="full-card scrollable square-corner">
            <ListGroup className="square-corner" variant="flush">
              {listItems}
            </ListGroup>
          </Card>
        </div>
        <div className="contact-details">
          {this.state.isMobileDevice ? searchBar : ""}
          <ContactDetails user={selectedUser} isMobileDevice={this.state.isMobileDevice}/>
        </div>
      </div>
    );
  }
}

export default ContactList;


