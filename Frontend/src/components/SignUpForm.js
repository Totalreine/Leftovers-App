import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';


function SignUpForm() {
  const [name, setName]= useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const register = (event) => {
    event.preventDefault();
    axios.post('/signup', {
      email: emailReg,
      name: name,
      password: passwordReg
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <Form className = "form" onSubmit={register}>
      <div className='form-label'><h4>Sign Up</h4></div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" value = {name} onChange = {(e)=> { setName(e.target.value) }} placeholder="Enter full name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={emailReg} onChange = { (e)=>{ setEmailReg(e.target.value)}} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value = {passwordReg} onChange= {(e) => {setPasswordReg(e.target.value)}}placeholder="Password"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value ={confirmPass} onChange= {(e) => {setConfirmPass(e.target.value)}} placeholder="Confirm password"/>
      </Form.Group>
      <div className= "btn-div">
      <Button variant="primary" id="form-btn" type="submit">
        <p>Sign Up</p>
      </Button>
      </div>
      <div className="link-div">
      <Link to="/login" className="link">Already have an account? <b>Login</b></Link>
      </div>
    </Form>
  );
}

export default SignUpForm;