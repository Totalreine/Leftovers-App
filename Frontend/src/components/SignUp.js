import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <div className='form-container'>

      <div className='message-container'>
        <div className='message'>
          <p>
            <b>Fit Cooking Back Into Your Schedule with </b>
            <img src='./logo-blk.png' alt="leftovers-logo" height={40} />
          </p>
        </div>
      </div>
      <div className="form-card">
        <SignUpForm/>
      </div>
    </div>
  );
}
export default SignUp;