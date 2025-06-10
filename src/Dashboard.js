import React from "react";
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtext">You have successfully registered.</p>
      <p className="dashboard-subtext">Please Scan your QR code for Attendance.</p>

      <div className="button-group">
        <button className="btn btn-success">Add</button>
        <button className="btn btn-warning">Unregistered</button>
      </div>

      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name of Student</th>
              <th>Picked Up By</th>
              <th>Role</th>
              <th>Grade Level</th>
              <th>Status</th>
              <th>Time Scanned</th>
              <th>QR Scanned</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Andrei Santos</td>
              <td>Juan Dela Cruz</td>
              <td>Parent</td>
              <td>Grade 4</td>
              <td>Registered</td>
              <td>4:30 PM</td>
              <td>✅</td>
              <td>Picked up on time</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Alexa Reyes</td>
              <td>Maria Santos</td>
              <td>Guardian</td>
              <td>Grade 2</td>
              <td>Unregistered</td>
              <td>—</td>
              <td>❌</td>
              <td>Pending QR Scan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
