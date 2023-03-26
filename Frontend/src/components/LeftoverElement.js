import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import { useContext } from 'react';
import { leftoversContext } from '../providers/LeftoversProvider';

function LeftoverElement(props) {
  const { deleteLeftover } = useContext(leftoversContext);
  console.log("props", props)
  
  return (
    <li className="leftoverListItem">
    <p> {props.leftover} </p>
    <Icon path={mdiClose} size={1.2} className="delete" onClick={() => deleteLeftover(props.leftover)}/>
    </li>
  )
}

export default LeftoverElement;