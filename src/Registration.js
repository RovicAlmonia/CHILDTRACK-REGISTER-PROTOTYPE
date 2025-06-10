import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { saveAs } from "file-saver";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();
  const qrRef = useRef(null);

  const [formData, setFormData] = useState({
    role: "Parent",
    name: "",
    age: "",
    address: "",
    contact: "",
    childName: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const downloadQRCode = () => {
    const svg = qrRef.current.querySelector("svg");
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], {
      type: "image/svg+xml",
    });
    saveAs(svgBlob, `${formData.name}_QR.svg`);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Child Track Registration</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Registering as</label>
          <select name="role" className="form-select" value={formData.role} onChange={handleChange}>
            <option value="Parent">Parent</option>
            <option value="Guardian">Guardian</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Age</label>
          <input type="number" name="age" className="form-control" required value={formData.age} onChange={handleChange} />
        </div>

        <div className="col-md-8">
          <label className="form-label">Address</label>
          <input type="text" name="address" className="form-control" required value={formData.address} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Contact Number</label>
          <input type="text" name="contact" className="form-control" required value={formData.contact} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Student Under / Name of Child</label>
          <input type="text" name="childName" className="form-control" required value={formData.childName} onChange={handleChange} />
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-success px-5">Register</button>
        </div>
      </form>

      {submitted && (
        <div className="qr-section text-center">
          <h5>QR Code Generated</h5>
          <div ref={qrRef} className="d-flex justify-content-center my-3">
            <QRCodeSVG value={JSON.stringify(formData)} size={200} />
          </div>

          <button onClick={downloadQRCode} className="btn btn-outline-primary me-2">
            Download QR Code
          </button>

          <button onClick={() => navigate("/dashboard")} className="btn btn-primary">
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default Registration;
