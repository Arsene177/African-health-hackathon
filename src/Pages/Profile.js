import React, { useState } from 'react';
import Dnav from '../Components/Dnav';

const Profile = () => {
    // Doctor Profile Information
    const doctor = {
        name: 'Dr. Tsakeng',
        age: 34,
        specialty: 'Cardiology',
        sex: 'Male',
        profilePic: 'Arsene.jpeg',
        hospitalAffiliation: 'CHU YAOUNDE'
    };

    // State for Emergency Section
    const [searchQuery, setSearchQuery] = useState('');
    const [patientInfo, setPatientInfo] = useState(null);

    // Mock database fetch function
    const fetchPatientInfo = (name) => {
        // Mock patient data
        const database = {
            'John Doe': { name: 'John Doe', age: 34, weight: '72kg', bloodGroup: 'O+', allergies: 'Peanuts' },
            'Jane Smith': { name: 'Jane Smith', age: 29, weight: '60kg', bloodGroup: 'A-', allergies: 'None' }
        };
        return database[name] || null;
    };

    // Handle Search
    const handleSearch = () => {
        const result = fetchPatientInfo(searchQuery);
        setPatientInfo(result);
    };

    // Handle Clear Input
    const clearInput = () => {
        setSearchQuery('');
        setPatientInfo(null);
    };

    return (
        <div style={styles.pageWrapper}>
            <Dnav />
            <div style={styles.container}>
                {/* Doctor's Profile Section */}
                <div style={styles.profileSection}>
                    <div style={styles.profileCard}>
                        <img src={doctor.profilePic} alt="Doctor's Profile" style={styles.profileImage} />
                        <h2 style={styles.name}>{doctor.name}</h2>
                        <p style={styles.info}><strong>Age:</strong> {doctor.age}</p>
                        <p style={styles.info}><strong>Specialty:</strong> {doctor.specialty}</p>
                        <p style={styles.info}><strong>Sex:</strong> {doctor.sex}</p>
                        <p style={styles.info}><strong>Hospital Affiliation:</strong> {doctor.hospitalAffiliation}</p>
                    </div>
                </div>

                {/* Emergency Section */}
                <div style={styles.emergencySection}>
                    <h2 style={styles.sectionTitle}>Emergency Section</h2>
                    <div style={styles.searchWrapper}>
                        <input 
                            type="text" 
                            placeholder="Enter Patient's Name" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            style={styles.searchInput}
                        />
                        {searchQuery && (
                            <button onClick={clearInput} style={styles.clearButton}>X</button>
                        )}
                    </div>
                    <button onClick={handleSearch} style={styles.searchButton}>Search</button>
                    {patientInfo ? (
                        <div style={styles.patientInfoCard}>
                            <h3>{patientInfo.name}</h3>
                            <p><strong>Age:</strong> {patientInfo.age}</p>
                            <p><strong>Weight:</strong> {patientInfo.weight}</p>
                            <p><strong>Blood Group:</strong> {patientInfo.bloodGroup}</p>
                            <p><strong>Allergies:</strong> {patientInfo.allergies}</p>
                        </div>
                    ) : (
                        searchQuery && <p style={styles.noResult}>No patient found with this name.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Styling
const styles = {
    pageWrapper: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
        padding: '20px',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    profileSection: {
        width: '45%',
    },
    profileCard: {
        border: '2px solid #007bff',
        borderRadius: '15px',
        padding: '30px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    },
    profileImage: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        border: '3px solid #007bff',
    },
    name: {
        fontSize: '28px',
        color: '#007bff',
        marginBottom: '15px',
    },
    info: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '10px',
    },
    emergencySection: {
        width: '45%',
        padding: '20px',
        border: '2px solid #007bff',
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    },
    sectionTitle: {
        fontSize: '24px',
        color: '#007bff',
        marginBottom: '15px',
    },
    searchWrapper: {
        position: 'relative',
        marginBottom: '10px',
    },
    searchInput: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    clearButton: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        color: '#888',
        cursor: 'pointer',
        fontSize: '18px',
    },
    searchButton: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '15px',
    },
    patientInfoCard: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
    },
    noResult: {
        color: '#ff0000',
        fontSize: '16px',
    }
};

export default Profile;
