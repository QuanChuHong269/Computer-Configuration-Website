import React from "react";

function Register({ onLoginClick }) {
  return (
    <div style={styles.app}>
      <style>{`
        .auth-container { text-align: center; color: #ccc; }
        .auth-box { background-color: #e8f7f9; padding: 20px; width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        .auth-box h3 { margin-bottom: 20px; }
        .input { display: block; width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #b2dfdb; border-radius: 5px; }
        .btn-primary { width: 100%; padding: 10px; background-color: #4fd0e9; color: #fff; border: none; border-radius: 5px; cursor: pointer; }
        .btn-primary:hover { background-color: #38c0d7; }
        .note { background-color: #f3f9f9; border: none; font-size: 0.9em; color: #666; }
        .toggle-link { color: #38c0d7; cursor: pointer; }
      `}</style>

      <div className="auth-container">
        <h2>Registration</h2>
        <div className="auth-box">
          <h3>Create a new account</h3>
          <input type="text" placeholder="Username" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="email" placeholder="Email (again)" className="input" />
          <textarea
            readOnly
            value="Note: An account activation email will be sent to the email address you provide."
            className="note"
            rows="2"
          />
          <input type="password" placeholder="Password" className="input" />
          <input
            type="password"
            placeholder="Password (again)"
            className="input"
          />
          <button className="btn-primary">Register</button>
          <p>
            Already a member?{" "}
            <span onClick={onLoginClick} className="toggle-link">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#2c2f33",
  },
};

export default Register;
