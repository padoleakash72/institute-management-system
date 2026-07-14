function Home() {
  return (
    <div>

      {/* NAVBAR */}

      <nav
        className="
        navbar
        navbar-expand-lg
        shadow-sm"
        style={{
          background:
            "linear-gradient(to right,#0f172a,#1e3a8a)",
          padding: "18px 50px"
        }}
      >

        <div
          className="
          container-fluid"
        >

          {/* Logo + Name */}

          <div
            className="
            d-flex
            align-items-center"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="logo"
              style={{
                width: "45px",
                marginRight: "12px"
              }}
            />

            <h4
              className="
              text-white
              m-0
              fw-bold"
            >

              Institute ERP

            </h4>

          </div>

          {/* Menu */}

          <ul
            className="
            navbar-nav
            ms-auto
            d-flex
            flex-row
            gap-4"
          >

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
                href="/home"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                Teacher
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                Student
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                Administration
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                Career
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a
                className="
                nav-link
                text-white"
              >
                Contact Us
              </a>
            </li>

          </ul>

        </div>

      </nav>

    </div>
  );
}

export default Home;