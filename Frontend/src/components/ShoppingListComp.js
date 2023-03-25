import ListGroup from 'react-bootstrap/ListGroup';
import ShoppingListItem from './ShoppingListItem';

function ShoppingListComp() {
  return (
    <ListGroup variant="flush">
    <ShoppingListItem/>
    </ListGroup>
  );
}

export default ShoppingListComp;