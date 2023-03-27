import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpForm() {

  return (
    <Form className = "form">
      <div className='form-label'><h5>Sign Up</h5></div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name"/>
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password"/>
      </Form.Group>
      <div className= "btn-div">
      <Button variant="primary"  type="submit">
        <p>Sign Up</p>
      </Button>
      </div>
      <div className="link-div">
      <Link to="/login" className="link">Already have an account? Login</Link>
      </div>
    </Form>
  );
}

export default SignUpForm;