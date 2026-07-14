import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div
      className="
      container-fluid
      vh-100
      d-flex
      justify-content-center
      align-items-center"
      style={{
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a)"
      }}
    >

      <div
        className="
        bg-white
        rounded-5
        shadow-lg
        overflow-hidden"
        style={{
          width: "950px",
          maxWidth: "92%",
          height: "490px"
        }}
      >

        <div className="row g-0">

          {/* IMAGE */}

          <div
            className="
            col-md-6
            d-none
            d-md-block"
          >

            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585"
              alt="Institute"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

          </div>

          {/* FORM */}

          <div
            className="col-md-6 p-5"
          >

            <div
              className="mb-4"
            >

              <h2
                className="
                fw-bold"
              >

                Institute ERP

              </h2>

              <p
                className="
                text-muted"
              >

                Welcome back

              </p>

            </div>

            <form
              onSubmit={
                handleLogin
              }
            >

              <div
                className="
                mb-3"
              >

                <label>
                  Email
                </label>

                <input
                  type="email"
                  className="
                  form-control
                  rounded-4
                  p-3"
                  placeholder=
                  "Enter email"

                  value={
                    email
                  }

                  onChange={
                    (e) =>
                      setEmail(
                        e.target
                          .value
                      )
                  }
                />

              </div>

              <div
                className="
                mb-3"
              >

                <label>
                  Password
                </label>

                <div
                  className="
                  input-group"
                >

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }

                    className="
                    form-control
                    rounded-start-4
                    p-3"
                    placeholder=
                    "Enter password"

                    value={
                      password
                    }

                    onChange={
                      (e) =>
                        setPassword(
                          e.target
                            .value
                        )
                    }
                  />

                  <button
                    type=
                    "button"

                    className="
                    btn
                    btn-outline-primary"

                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >

                    {
                      showPassword
                        ? <FaEyeSlash />
                        : <FaEye />
                    }
                  </button>

                </div>

              </div>

              <div
                className="
                d-flex
                justify-content-between
                mb-4"
              >

                <label>

                  <input
                    type=
                    "checkbox"
                  />

                  {" "}
                  Remember me

                </label>

                <a
                  href=
                  "/forgot-password"
                  style={{
                    textDecoration:
                      "none"
                  }}
                >

                  Forgot
                  Password?

                </a>

              </div>

              <button
                className="
                btn
                btn-primary
                rounded-4
                w-100
                p-3"
              >

                Login

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;