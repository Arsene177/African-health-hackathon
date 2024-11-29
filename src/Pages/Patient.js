import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../CSS/Consultation.css";
import Pnav from "../Components/Pnav";
import { FaPhoneAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

const Home = ({ patientRecord }) => {
  const contentRef = useRef(); // Create a ref to capture the content

  const handleCall = (doctor) => {
    const callLink =
      doctor === "Dr Ndongo"
        ? "https://zoom.us/j/your_meeting_id"
        : "https://meet.google.com/your-meeting-id";
    window.open(callLink, "_blank");
  };

  const downloadPDF = () => {
    html2canvas(contentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190; // Adjust width as needed
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("patient_consultation.pdf");
    });
  };

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2024/11/28/16/20241128162335-GHH6Q1D4.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  // Sample list of hospital coordinates in Yaoundé (You can replace these with actual coordinates)
  const hospitals = [
    { name: "Yaoundé Central Hospital", lat: 3.848, lng: 11.5021 },
    { name: "General Hospital Yaoundé", lat: 3.8495, lng: 11.5065 },
    { name: "Chantal Biya Foundation Hospital", lat: 3.835, lng: 11.4999 }
    // Add more hospitals as needed
  ];

  return (
    <div ref={contentRef}>
      {" "}
      {/* Capture this div for the PDF */}
      <Pnav />
      <div className="container">
        <div className="left-section">
          <div className="header">
            <div className="image-container">
              <img src="WhatsApp Image 2024-11-28 at 21.49.35.jpeg" alt="Doctor" />
            </div>
            <div className="title">
              <h1>Patient Consultation</h1>
              <p>{patientRecord.name}</p>
            </div>
          </div>
          <div className="form-container">
            <div className="registration-form">
              {Object.entries(patientRecord).map(([key, value]) => (
                <div className="input-group" key={key}>
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <input type="text" value={value} readOnly />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          {["Dr Ndongo", "Dr Kamga"].map((doctor, index) => (
            <div key={index} className="diagnostic-form">
              <div className="form-header">
                <label>
                  <b>{doctor}</b>
                </label>
                <FaPhoneAlt
                  className="call-icon"
                  onClick={() => handleCall(doctor)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    color: "#007bff"
                  }}
                />
                <input type="text" value="Weight (Kg): 50" readOnly />
                <input type="text" value="Temperature (°C): 37°" readOnly />
                <input type="text" value="Blood Pressure (Bp): 110" readOnly />
                <input type="text" value="Pulse (bpm): 100" readOnly />
                <input type="text" value="MM-DD-YYYY: 17/03/2005" readOnly />
              </div>
            </div>
          ))}
          <button onClick={downloadPDF} style={{ marginTop: "20px" }}>
            Download PDF
          </button>
        </div>
      </div>
      {/* Map Section */}
      <div style={{ marginTop: "40px", height: "400px" }}>
        <h2>Hospitals in Yaoundé</h2>
        <MapContainer
          center={[3.848, 11.5021]}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {hospitals.map((hospital, index) => (
            <Marker key={index} position={[hospital.lat, hospital.lng]}>
              <Popup>{hospital.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

const Patient = () => {
  const patientRecord = {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    dob: "01-01-1993",
    sex: "Male",
    height: "180 cm",
    weight: "75 kg",
    maritalStatus: "Single",
    religion: "Christianity",
    address: "123 Main St",
    city: "Springfield",
    contact: "555-1234",
    emergencyContact: "555-5678",
    emergencyName: "Jane Doe",
    relationship: "Sister"
  };

  return <Home patientRecord={patientRecord} />;
};

export default Patient;
