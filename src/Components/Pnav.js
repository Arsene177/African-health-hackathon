import React from 'react';
import '../CSS/Nav.css';
import { NavLink } from 'react-router-dom';


const PatientNav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/followUp" activeClassName="active">Medication follow-up</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">
        <img src={"./Profile.png"} alt="Profile" className="profile-icon" />
          My Profile
        </NavLink></li>
        <li><NavLink to="/" activeClassName="active">Logout</NavLink></li>
      </ul>
    </nav>
  );
};

export default PatientNav;
