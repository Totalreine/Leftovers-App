import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from "react";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = () => {
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
      <div className='lglabel'><h5>Login</h5></div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={ (e) => {setEmail(e.target.value)}} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} onChange = {(e)=> {setPassword(e.target.value)}}placeholder="Password"/>
      </Form.Group>
      <div className= "btn-div">
      <Button variant="primary" style={{backgroundColor: '#F29544', borderColor:'#F29544', padding: '10px 166px' }} type="submit">
        Login
      </Button>
      </div>
      <div className="signup">
      <Link to="/signup" className="signup-link">Don’t have an account yet? Sign Up</Link>
      </div>
    </Form>
  );
}

export default BasicExample;