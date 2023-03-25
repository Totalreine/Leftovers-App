import ListGroup from 'react-bootstrap/ListGroup';

function ShoppingListItem() {
  const shoppingList = ["Cooking Oil", "Apples", "Lettuce"];
  return (
    <div>
    {shoppingList.map((item, index) => (
      <ListGroup.Item>  <input value={item} type="checkbox" /> {item[index]} </ListGroup.Item> 
   ))}
   </div>
  );
}

export default ShoppingListItem;