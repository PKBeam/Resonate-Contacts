import { Card, ListGroup } from 'react-bootstrap';
import './AvatarText.css';

// generate a random-ish color for a name
function colorForName(name) {
  var c = 1;
  for (var i = 0; i < name.length; i++) {
    c *= name.charCodeAt(i);
  }
  var maxCol = parseInt("FFFFFF", 16)
  var colString = (c % maxCol).toString(16)
  var leftPadded = ("0000" + colString).slice(-6)
  return "#" + leftPadded
}

function AvatarText(props) {

  var split = props.name.split(" ")
  var firstInitial = split[0][0]
  var lastInitial = split[split.length - 1][0]
  return (
    <div className="list-avatar">
      <div className="avatar" style={{backgroundColor: colorForName(props.name)}}>
          <svg className="square" style={{width: props.width + "px"}} viewBox='0 0 1 1'></svg>
          <div className="avatar-text">
              {firstInitial + lastInitial}
          </div>
      </div>
    </div>
  );
}

export default AvatarText;




