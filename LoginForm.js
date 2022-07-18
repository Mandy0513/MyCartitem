import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <body>
      <form action="">
        <div className="center">
          <div className="txt_field">
            <label htmlFor="email"> Email </label>
            <input type="text" name="email" id="email" />
          </div>

          <div className="txt_field">
            <label htmlFor="password"> Password </label>
            <input type="password" name="password" id="password" />
          </div>

          <div className="pass">Forgot Password?</div>

          <button type="submit" value="Login"> LOGIN </button>
          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </div>
      </form>
    </body>
  );
};

export default LoginForm;
