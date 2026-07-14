import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: "250px",
          background: "#f5f7fb",
          minHeight: "100vh"
        }}
      >
        <Navbar />

        <div className="container-fluid p-4">

          <h2 className="fw-bold">
            Welcome Admin 
          </h2>

          <p className="text-muted">
            Manage your institute from here.
          </p>

          {/* Dashboard Cards */}

          <div className="row mt-4">

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="card shadow border-0 p-4">

                <h3>350</h3>

                <p className="text-muted mb-0">
                  Total Students
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="card shadow border-0 p-4">

                <h3>20</h3>

                <p className="text-muted mb-0">
                  Total Teachers
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="card shadow border-0 p-4">

                <h3>92%</h3>

                <p className="text-muted mb-0">
                  Attendance
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-4">

              <div className="card shadow border-0 p-4">

                <h3>₹2.5L</h3>

                <p className="text-muted mb-0">
                  Fees Collected
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;