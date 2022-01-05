import { Card, ListGroup } from 'react-bootstrap';
import './AvatarText.css';

function AvatarText(props) {

  var split = props.name.split(" ")
  var firstInitial = split[0][0]
  var lastInitial = split[split.length - 1][0]
  return (
    <div className="list-avatar">
      <div className="avatar">
          <svg className="square" style={{width: props.width + "px"}} viewBox='0 0 1 1'></svg>
          <div className="avatar-text">
              {firstInitial + lastInitial}
          </div>
      </div>
    </div>
  );
}

export default AvatarText;




