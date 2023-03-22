
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {

  return (
    <Form className = "form">
      <div className='lglabel'><h5>Login</h5></div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <div className= "btn-div">
      <Button variant="primary" style={{backgroundColor: '#F29544', borderColor:'#F29544', padding: '10px 166px' }} type="submit">
        Login
      </Button>
      </div>
    </Form>
  );
}

export default BasicExample;