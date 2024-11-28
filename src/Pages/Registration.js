import React, { useState } from 'react';
import '../CSS/Registration.css';
import { NavLink } from 'react-router-dom';

const medicalSpecializations = [
    "Allergy and Immunology",
    "Anesthesiology",
    "Cardiology",
    "Cardiothoracic Surgery",
    "Child and Adolescent Psychiatry",
    "Clinical Genetics",
    "Clinical Informatics",
    "Dermatology",
    "Emergency Medicine",
    "Endocrinology",
    "Family Medicine",
    "Gastroenterology",
    "General Surgery",
    "Geriatric Medicine",
    "Hematology",
    "Infectious Disease",
    "Internal Medicine",
    "Interventional Radiology",
    "Medical Genetics",
    "Medical Microbiology",
    "Medical Oncology",
    "Neonatology",
    "Neurology",
    "Neurosurgery",
    "Obstetrics and Gynecology",
    "Occupational Medicine",
    "Ophthalmology",
    "Orthopedic Surgery",
    "Otolaryngology (ENT)",
    "Palliative Care",
    "Pathology",
    "Pediatrics",
    "Physical Medicine and Rehabilitation",
    "Plastic Surgery",
    "Psychiatry",
    "Pulmonology",
    "Radiation Oncology",
    "Radiology",
    "Rheumatology",
    "Sleep Medicine",
    "Sports Medicine",
    "Surgery",
    "Thoracic Surgery",
    "Urology",
    "Vascular Surgery",
    "Other"
];

const DoctorRegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        specialization: '',
        licenseNumber: '',
        hospitalAffiliation: '',
        yearsExperience: '',
        bio: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <>
           <NavLink
    to="../About"
    style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",              // Slightly larger for a more prominent look
        height: "60px",             // Slightly larger for a more prominent look
        background: "linear-gradient(135deg, #6fb1fc 0%, #4364f7 100%)", // Gradient background
        color: "white",
        fontSize: "18px",          // Increased font size for better readability
        borderRadius: "50%",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
        transition: "background 0.3s, transform 0.3s", // Smooth transitions for hover effects
        marginBottom: "20px",      // Added margin for spacing
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)"; // Scale effect on hover
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";   // Reset scale effect on mouse leave
    }}
>
    ←
</NavLink>


            <form className="doctor-registration-form" onSubmit={handleSubmit}>
                <h2>Doctor Registration</h2>
                <div className="logo-container">
                    <img src="MedLog.png" alt="Logo" className="welcome-logo" />
                </div>

                <label htmlFor="fullName">Full Name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="specialization">Specialization</label>
                <select 
                    id="specialization" 
                    name="specialization" 
                    value={formData.specialization} 
                    onChange={handleChange} 
                    required
                >
                    <option value="" disabled>Select your specialization</option>
                    {medicalSpecializations.map((specialization) => (
                        <option key={specialization} value={specialization}>
                            {specialization}
                        </option>
                    ))}
                </select>

                <label htmlFor="licenseNumber">Medical License Number</label>
                <input 
                    type="text" 
                    id="licenseNumber" 
                    name="licenseNumber" 
                    value={formData.licenseNumber} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="hospitalAffiliation">Hospital Affiliation</label>
                <input 
                    type="text" 
                    id="hospitalAffiliation" 
                    name="hospitalAffiliation" 
                    value={formData.hospitalAffiliation} 
                    onChange={handleChange} 
                />

                <label htmlFor="yearsExperience">Years of Experience</label>
                <input 
                    type="number" 
                    id="yearsExperience" 
                    name="yearsExperience" 
                    value={formData.yearsExperience} 
                    onChange={handleChange} 
                    min="0" 
                    required 
                />

                <label htmlFor="bio">Short Bio</label>
                <textarea 
                    id="bio" 
                    name="bio" 
                    value={formData.bio} 
                    onChange={handleChange} 
                />

                <NavLink 
                    to="../doctor" 
                    type="submit" 
                    style={{
                        textDecoration: "none",
                        border: 'solid 2px blue',
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        display: "inline-block",
                        textAlign: "center"
                    }}
                >
                    Register
                </NavLink>
            </form>
        </>
    );
};

export default DoctorRegistrationForm;
