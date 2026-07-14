import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Password reset link sent successfully!");
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(to right,#0f172a,#1e3a8a)",
      }}
    >
      <div
        className="bg-white p-5 rounded shadow"
        style={{ width: "450px" }}
      >
        <h2 className="text-center mb-3">
          Forgot Password
        </h2>

        <p className="text-center text-muted mb-4">
          Enter your registered email address
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email Address</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;