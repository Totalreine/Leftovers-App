import ListGroup from 'react-bootstrap/ListGroup';

function ShoppingListItem() {
  const shoppingList = ["Cooking Oil", "Apples", "Lettuce"];
  return (
    <div>
    {shoppingList.map((item) => (
      <ListGroup.Item>  <input value={item} type="checkbox" /> {item} </ListGroup.Item> 
   ))}
   </div>
  );
}

export default ShoppingListItem;