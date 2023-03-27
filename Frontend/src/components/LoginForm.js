import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {

  return (
    <Form className = "form">
      <div className='form-label'><h5>Login</h5></div>
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
      <Button variant="primary" id="form-btn" type="submit">
        <p>Login</p>
      </Button>
      </div>
      <div className="link-div">
      <Link to="/" className="link">Don't already have an account? Click here to sign up.</Link>
      </div>
    </Form>
  );
}

export default LoginForm;