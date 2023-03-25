import { useState } from 'react';
import { authContext } from '../providers/authProvider.js';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

function LoginForm() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);


const onSubmit = function(event) {
  event.preventDefault();
  email && login(email, password);
};
  return (
    <Container>
      <Row>
        <Col>
          <Form className="form" onSubmit={onSubmit}>
            <div className='lglabel'><h5>Login</h5></div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Row>
             <Col>
              <Button variant="primary" style={{ backgroundColor: '#F29544', borderColor: '#F29544'}} type="submit">
                Login
              </Button>
            <div className="signup">
              <Link to="/signup" className="signup-link">Don’t have an account yet? Sign Up</Link>
            </div>
            </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;