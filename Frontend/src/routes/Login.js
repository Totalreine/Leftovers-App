import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login.css"
import BasicExample from '../components/FormComp';
function Login() {
    return (
            <Container fluid>
            <div className='row g-0'>
                    <Col id='message-container'>
                    <div className='message'>
                             <p>
                                <b>Fit Cooking Back Into Your Schedule with </b>
                               <img src='./logo-blk.png' alt="bug" height={40} />
                            </p>
                         </div>
                
                    </Col>
                    <Col id='login-form'>
                        <BasicExample/>
                    </Col>
                </div>
                </Container>
       
                );
               

}
export default Login;