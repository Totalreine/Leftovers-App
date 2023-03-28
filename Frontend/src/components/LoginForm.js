import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    axios.post('/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
  return (
    <Form className = "form" onSubmit={loginUser}>
      <div className='form-label'><h5>Login</h5></div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}}placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password"/>
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