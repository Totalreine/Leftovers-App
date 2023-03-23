import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function LeftoverElement() {
  return (
    <li className="leftoverListItem">
    <p> Eggs </p>
    <Icon path={mdiClose} size={1.2} className="delete"/>
    </li>
  )
}

export default LeftoverElement;