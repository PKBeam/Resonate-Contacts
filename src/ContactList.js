import { Card, ListGroup, Form} from 'react-bootstrap';
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
      selectedId: 1
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      users: props.users,
      isMobileDevice: props.isMobileDevice,
      selectedId: state.selectedId
    }
  }

  contactClicked(id) {
    this.setState({ selectedId: id })
  }

  render() {

    const users = this.state.users

    if (users == null) {
      return null
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
    console.log(sortedUsers)

    const listItems = users.map((user) =>
      <ListGroup.Item key={"listItem"+user.id} className="list-item" action onClick={() => this.contactClicked(user.id)}>
        <div className="flex align-center">
          <AvatarText name={user.name} width="40"/>
          <div className="left-margin">
            {this.state.isMobileDevice ? "" : user.name}
          </div>
        </div>
      </ListGroup.Item>
    )

    // get the user id that was selected, to show detailed info
    const selectedUser = users.find((u) => {
      return u.id == this.state.selectedId}
    )

    return (
      <div className="flex">
        <div className="contact-list">
          <Card className="full-card square-corner">
            <ListGroup className="square-corner" variant="flush">
              {listItems}
            </ListGroup>
          </Card>
        </div>
        <div className="contact-details">
          <ContactDetails user={selectedUser} isMobileDevice={this.state.isMobileDevice}/>
        </div>
      </div>
    );
  }
}

export default ContactList;


