import { Card, ListGroup, Table } from 'react-bootstrap';
import './ContactDetails.css';
import AvatarText from './AvatarText.js';

function ContactDetails(props) {
  var user = props.user
  if (user == null) {
    return (<div/>)
  }
  console.log(props.isMobileDevice)
  return (
  <Card className="full-card square-corner">
    <Card.Body className={props.isMobileDevice ? "" : "card-inside"}>
      <div className="flex">
        <div className="flex align-start">
          <AvatarText name={user.name} width="50"/>
        </div>
        <div className="left-margin">
          <Card.Title>
            {user.name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            @{user.username}
          </Card.Subtitle>
        </div>
      </div>
      <Table borderless size="sm">
        <tbody>
          <tr>
            <td className="text-bold text-muted">Email:</td>
            <td><a href={"mailto:" + user.email}>{user.email}</a></td>
          </tr>
          <tr>
            <td className="text-bold text-muted">Phone:</td>
            <td><a href={"tel:" + user.phone}>{user.phone}</a></td>
          </tr>
          <tr>
            <td className="text-bold text-muted">Address:</td>
            <td>
              <Table borderless size="sm">
                <tbody>
                  <tr>
                    <td className="no-pad">{user.address.suite} {user.address.street}</td>
                  </tr>
                  <tr>
                    <td className="no-pad">{user.address.city}</td>
                  </tr>
                  <tr>
                    <td className="no-pad">{user.address.zipcode}</td>
                  </tr>
                  <tr>
                    <td className="text-muted no-pad small-font">{user.address.geo.lat}°N, {user.address.geo.lng}°E.</td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td className="text-bold text-muted">Website:</td>
            <td><a href={"http://" + user.website}>{user.website}</a></td>
          </tr>
          <tr>
            <td className="text-bold text-muted">Company:</td>
            <td>
              <Table borderless size="sm">
                <tbody>
                  <tr>
                    <td className="no-pad">{user.company.name}</td>
                  </tr>
                  <tr>
                    <td className="text-muted no-pad small-font">{user.company.catchPhrase};</td>
                    </tr>
                  <tr>
                    <td className="text-muted no-pad small-font">{user.company.bs}.</td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card.Body>
  </Card>
  );
}

export default ContactDetails;



