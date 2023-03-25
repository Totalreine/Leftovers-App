import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login.css"
import BasicExample from '../components/FormComp';
function Login() {
    return (
        <div className='login-page'>
                <div className='row g-0'>
                    <Col id='message-container'>
                            < div className='align-self-center' id='message'>
                                <p>
                                    <b>Fit Cooking Back Into Your Schedule with </b>
                                    </p>
                                    <img src='./logo-blk.png' alt="bug" height={40} />
                               
                            </div>

                    </Col>
                    <Col id='login-form'>
                         <BasicExample/>
                        
                    </Col>
                </div>
        </div>

    );


}
export default Login;