import { Card, ListGroup } from 'react-bootstrap';
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

  contactClicked(id) {
    this.setState({ selectedId: id })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users,
      isMobileDevice: nextProps.isMobileDevice,
    })
  }

  render() {
    const listItems = this.state.users == null ? (<div/>) : this.state.users.map((user) =>
      <ListGroup.Item key={"listItem"+user.id} className="list-item" action onClick={() => this.contactClicked(user.id)}>
        <div className="flex align-center">
          <AvatarText name={user.name} width="40"/>
          <div className="left-margin">
            {this.state.isMobileDevice ? "" : user.name}
          </div>
        </div>
      </ListGroup.Item>
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
          <ContactDetails user={this.state.users == null ? null : this.state.users[this.state.selectedId - 1]} isMobileDevice={this.state.isMobileDevice}/>
        </div>
      </div>
    );
  }
}

export default ContactList;


