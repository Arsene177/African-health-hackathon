import React, { useState } from 'react';
import '../CSS/RegisterPatient.css';
import Dnav from '../Components/Dnav.js';

const PatientMedicalBooklet = () => {
  const [patientID, setPatientID] = useState('');

  // Function to generate a memorable unique ID
  const generateUniqueID = (dob, town) => {
    const year = dob.slice(2, 4); // Get last two digits of the year
    const townCode = town.slice(0, 2).toUpperCase(); // First two letters of the town
    const timestamp = Date.now().toString().slice(-3); // Last three digits of timestamp

    return `${year}${townCode}${timestamp}`;
  };

  // Function to download the patient ID as a text file
  const downloadPatientID = () => {
    const element = document.createElement("a");
    const file = new Blob([`Your Medichain ID: ${patientID}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "PatientID.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dob = e.target.elements.dob.value.trim();
    const town = e.target.elements.town.value.trim();

    if (!dob || !town) {
      alert('Please fill in the date of birth and town.');
      return;
    }

    const uniqueID = generateUniqueID(dob, town);
    setPatientID(uniqueID);
  };

  return (
    <>
      <Dnav />
      <div className="patient-form-container">
        <div className="form-header">
          <h2>New Patient Enrollment</h2>
          <p>Dr. Name</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" required />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <select name="sex" required>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Town</label>
            <input type="text" name="town" placeholder="Town" required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" name="age" placeholder="Age" required />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input type="number" name="weight" placeholder="Weight (kg)" required />
          </div>
          <div className="form-group">
            <label>Record</label>
            <textarea name="record" placeholder="Patient Record"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {patientID && (
          <div className="patient-id">
            <h3>Generated Patient ID:</h3>
            <p>{patientID}</p>
            <button onClick={downloadPatientID} className="download-btn">Download ID</button>
          </div>
        )}
      </div>
    </>
  );
};

export default PatientMedicalBooklet;
