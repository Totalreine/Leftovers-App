import LoginForm from "../components/LoginForm";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup-login.css";
import RootNavBar from "../components/RootNavBar";

function Login() {
  return (
    <div className="login-page">
      <RootNavBar />
      <div className="row g-0">
        <Col id="message-container">
          <div className="align-self-center" id="message">
            <p>
              <b>Fit Cooking Back</b>
            </p>
            <p>
              <b>Into Your Schedule with</b>
            </p>
            <img src="./logo-blk.png" alt="leftovers-logo" height={40} />
          </div>
        </Col>
        <Col id="login-form">
          <LoginForm />
        </Col>
      </div>
    </div>
  );
}
export default Login;
