import ListGroup from 'react-bootstrap/ListGroup';

function Sidebar() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item href="/home"  style={{background:"#9E9BF2"}}>
        Home
      </ListGroup.Item>
      <ListGroup.Item href="/myrecipes" style={{background:"#9E9BF2"}}>
        MyRecipes
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Sidebar;